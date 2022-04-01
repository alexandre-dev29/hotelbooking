import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthService } from '@hotelbooking/auth-user';
import { Reservation, Role, Tokens, User } from '@hotelbooking/shared-types';
import { PrismaService } from '@hotelbooking/utility';

@Injectable()
export class UserService {
  constructor(
    private authService: AuthService,
    private prismaService: PrismaService
  ) {}

  create({
    firstName,
    lastName,
    phoneNumber,
    location,
    password,
    emailAddress,
  }: CreateUserInput): Promise<User> {
    return this.authService.registerUser(
      firstName,
      lastName,
      phoneNumber,
      password,
      location,
      emailAddress
    );
  }

  findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  findOne(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { userId: userId } });
  }

  update(userId: string, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({
      where: { userId },
      data: updateUserInput,
    });
  }

  remove(userId: string) {
    return `This action removes a #${userId} user`;
  }

  getAllReservations(userId: string): Promise<Reservation[]> {
    return this.prismaService.reservation.findMany({
      where: { userId: userId },
    });
  }

  getAllTokens(userId: string): Promise<Tokens[]> {
    return this.prismaService.tokens.findMany({
      where: { userId: userId },
    });
  }

  async getRoleByUserId(userId: string): Promise<Role> {
    const currentUser = await this.prismaService.user.findUnique({
      where: { userId: userId },
    });
    return this.prismaService.role.findUnique({
      where: { roleId: currentUser.roleRoleId },
    });
  }
}
