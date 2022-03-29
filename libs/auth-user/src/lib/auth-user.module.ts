import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthResolver } from './auth/auth.resolver';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PrismaService, TwilioService, UtilityModule} from "@hotelbooking/utility";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET_JWT_ACCESS_KEY'),
      }),
      inject: [ConfigService],
    }),
    UtilityModule
  ],
  controllers: [],
  providers: [AuthService, AuthResolver, PrismaService, TwilioService],
  exports: [],
})
export class AuthUserModule {}
