import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tokens {
  @Field((_type) => ID)
  tokenId: string;

  @Field()
  token: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
