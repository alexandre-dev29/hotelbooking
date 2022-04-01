import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthResolver } from './auth/auth.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import {
  PrismaService,
  TwilioService,
  UtilityModule,
} from '@hotelbooking/utility';
import { LoginResponse } from '@hotelbooking/shared-types';

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
    UtilityModule,
  ],
  controllers: [],
  providers: [
    AuthService,
    AuthResolver,
    PrismaService,
    TwilioService,
    LoginResponse,
  ],
  exports: [],
})
export class AuthUserModule {}
