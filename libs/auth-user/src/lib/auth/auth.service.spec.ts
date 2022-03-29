import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import {PrismaService, TwilioService, UtilityModule} from "@hotelbooking/utility";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {User} from "@hotelbooking/shared-types";

describe('AuthService', () => {
  let service: AuthService;
  let registereduser: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get('SECRET_JWT_ACCESS_KEY'),
          }),
          inject: [ConfigService],
        }),
        UtilityModule
      ],
      providers: [AuthService, PrismaService, TwilioService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should register a new user', async function () {
    const username = 'mwenze29';
    const password = '123456';
    const phoneNumber = '+243814569874';
    const userRole = 'User';
    registereduser = await service.registerUser(
      {
        username,
        password,
        phoneNumber,
        userRole,
      },
    );

    expect(registereduser.username).toBe(username);
  });

  it('should login user', async function () {
    const loginResponse = await service.loginUser(
      registereduser.phoneNumber,
      '123456'
    );

    expect(loginResponse.accessToken).not.toBe(null);
  });
});
