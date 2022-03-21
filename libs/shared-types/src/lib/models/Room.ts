import { Field, ObjectType, ID, Int } from 'type-graphql';
import { Hotel } from './Hotel';

@ObjectType()
export class Room {
  @Field(() => ID)
  roomId: string;

  @Field()
  hotelId: string;

  @Field(() => Hotel)
  Hotel: Hotel;

  @Field()
  roomDescription: string;

  @Field(() => Int)
  roomCapacity: number;

  @Field()
  roomPrice: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
