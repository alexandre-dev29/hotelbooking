import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hotel {
  @Field((_type) => ID)
  hotelId: string;

  @Field()
  hotelName: string;

  @Field()
  location: string;

  @Field()
  owner: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
