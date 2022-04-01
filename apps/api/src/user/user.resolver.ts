import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Reservation, Role, Tokens, User } from '@hotelbooking/shared-types';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'getOneUser' })
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.findOne(userId);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.userId, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.remove(userId);
  }

  @ResolveField('reservations', () => [Reservation])
  async reservations(@Parent() user: User): Promise<Reservation[]> {
    return this.userService.getAllReservations(user.userId);
  }

  @ResolveField('tokens', () => [Tokens])
  async tokens(@Parent() user: User): Promise<Tokens[]> {
    return this.userService.getAllTokens(user.userId);
  }

  @ResolveField('role', () => Role)
  async role(@Parent() user: User): Promise<Role> {
    return this.userService.getRoleByUserId(user.userId);
  }
}
