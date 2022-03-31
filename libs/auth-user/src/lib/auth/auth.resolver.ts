import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse, User } from '@hotelbooking/shared-types';
import { AuthService } from './auth.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async loginUser(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('password', { type: () => String }) password: string
  ): Promise<LoginResponse> {
    return await this.authService.loginUser(phoneNumber, password);
  }

  @Mutation(() => User)
  async RegisterUser(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('password', { type: () => String }) password: string,
    @Args('firstName', { type: () => String }) firstName: string,
    @Args('location', { type: () => String, nullable: true }) location: string,
    @Args('lastName', { type: () => String }) lastName: string
  ): Promise<User> {
    return await this.authService.registerUser(
      firstName,
      lastName,
      phoneNumber,
      password,
      location
    );
  }
}
