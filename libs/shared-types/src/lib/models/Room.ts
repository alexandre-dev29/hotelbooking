import { Field, ObjectType, ID, Int } from 'type-graphql';
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

  @Field()
  roomPrice: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
