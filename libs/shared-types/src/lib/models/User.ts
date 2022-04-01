import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from './Role';

@ObjectType()
export class User {
  @Field((_type) => ID)
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

  @Field((_type) => Role, { nullable: true })
  Role?: Role;

  @Field({ nullable: true })
  roleRoleId?: string;

  // skip overwrite 👇
}
