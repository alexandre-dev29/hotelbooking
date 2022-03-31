import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './User';

@ObjectType()
export class Tokens {
  @Field((_type) => ID)
  tokenId: string;

  @Field()
  token: string;

  @Field()
  userId: string;

  @Field((_type) => User)
  User: User;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
