import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { AuthService } from '@hotelbooking/auth-user';
import { PrismaService, TwilioService } from '@hotelbooking/utility';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET_JWT_ACCESS_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    UserResolver,
    UserService,
    AuthService,
    PrismaService,
    TwilioService,
  ],
})
export class UserModule {}
