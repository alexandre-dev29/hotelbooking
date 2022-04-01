import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { Hotel } from './Hotel';

@ObjectType()
export class Room {
  @Field((_type) => ID)
  roomId: string;

  @Field()
  hotelId: string;

  @Field((_type) => Hotel)
  Hotel: Hotel;

  @Field()
  roomDescription: string;

  @Field((_type) => Int)
  roomCapacity: number;

  @Field((_type) => Float)
  roomPrice: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
