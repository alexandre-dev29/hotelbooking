import { Injectable } from '@nestjs/common';
import { PrismaService, TwilioService } from '@hotelbooking/utility';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse, User } from '@hotelbooking/shared-types';
import * as bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private twilioService: TwilioService
  ) {}

  async loginUser(
    phoneNumber: string,
    password: string
  ): Promise<LoginResponse | any> {
    const user = await this.prismaService.user.findUnique({
      where: { phoneNumber: phoneNumber },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = await this.jwtService.signAsync(
        {
          phoneNUmber: phoneNumber,
          userId: user.userId,
        },
        {
          expiresIn: '60m',
        }
      );
      await this.prismaService.tokens.deleteMany({
        where: { userId: user.userId },
      });
      await this.prismaService.tokens.create({
        data: {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user.userId,
          token: accessToken,
        },
      });
      return {
        accessToken,
        user: {
          userId: user.userId,
          phoneNumber: user.phoneNumber,
        },
      } as LoginResponse;
    } else {
      return new GraphQLError(
        'the password or email is invalid please try again'
      );
    }
  }

  async registerUser(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string,
    location: string
  ): Promise<User | any> {
    const userFounded = await this.prismaService.user.findUnique({
      where: { phoneNumber: phoneNumber },
    });

    if (userFounded) {
      return new GraphQLError('This user already exist in the system');
    }

    const roleRecup = await this.prismaService.role.findFirst({
      where: { userRole: 'User' },
    });

    const encryptedPassword = await bcrypt
      .hash(password, 10)
      .then((value) => value);

    try {
      const responseTwilio = await this.twilioService.SendOtpVerificationCode(
        phoneNumber
      );

      if (responseTwilio.status == 'pending') {
        const insertedUser = await this.prismaService.user.create({
          data: {
            firstName,
            lastName,
            phoneNumber,
            location,
            roleRoleId: roleRecup.roleId,
            password: encryptedPassword,
          },
        });
        return insertedUser;
      } else {
        return new GraphQLError(
          'There was an error while validating your phone number, please try again later'
        );
      }
    } catch (e) {
      return new GraphQLError(
        'An Error occur while registering please try again later'
      );
    }
  }

  async confirmPhoneNumber(
    phoneNumber: string,
    otpCode: string
  ): Promise<boolean | any> {
    const foundedUser = await this.prismaService.user.findUnique({
      where: { phoneNumber: phoneNumber },
    });
    if (foundedUser) {
      const confirmation = await this.twilioService.checkTheVerificationCode(
        phoneNumber,
        otpCode
      );

      if (!confirmation.valid || confirmation.status !== 'approved') {
        throw new GraphQLError('The code is not correct');
      } else {
        await this.prismaService.user.update({
          where: { userId: foundedUser.userId },
          data: { isPhoneConfirmed: true },
        });
        return true;
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async askingForOtpCode(phoneNumber: string): Promise<boolean | any> {
    const foundedUser = await this.prismaService.user.findUnique({
      where: { phoneNumber: phoneNumber },
    });

    if (foundedUser) {
      const responseTwilio = await this.twilioService.SendOtpVerificationCode(
        phoneNumber
      );
      if (responseTwilio.status == 'pending') {
        return true;
      } else {
        return new GraphQLError(
          'There was an error while validating your phone number, please try again later'
        );
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }
}
