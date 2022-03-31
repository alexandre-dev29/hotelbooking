import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './User';

@ObjectType()
export class Role {
  @Field((_type) => ID)
  roleId: string;

  @Field()
  userRole: string;

  @Field((_type) => [User])
  User: User[];

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
