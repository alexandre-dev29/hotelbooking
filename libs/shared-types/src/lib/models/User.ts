import { Reservation } from './Reservation';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Tokens } from './Tokens';
import { Role } from './Role';

@ObjectType()
export class User {
  @Field(() => ID)
  userId: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field()
  phoneNumber: string;

  @Field()
  password: string;

  @Field()
  location: string;

  @Field()
  isPhoneConfirmed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Reservation])
  reserations: Reservation[];

  @Field(() => [Tokens])
  Tokens: Tokens[];

  @Field(() => Role, { nullable: true })
  Role?: Role;

  @Field({ nullable: true })
  roleRoleId?: string;

  // skip overwrite 👇
}
