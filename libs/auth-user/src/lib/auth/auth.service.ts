import { Injectable } from '@nestjs/common';
import { PrismaService, TwilioService } from '@hotelbooking/utility';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from '@hotelbooking/shared-types';
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
          username: user.username,
          phoneNumber: user.phoneNumber,
          completeName: user.completeName,
        },
      } as LoginResponse;
    } else {
      return new GraphQLError(
        'the password or email is invalid please try again'
      );
    }
  }
}
