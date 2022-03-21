import { Field, ObjectType, ID } from 'type-graphql';
import { Room } from './Room';
import { Reservation } from './Reservation';

@ObjectType()
export class Hotel {
  @Field(() => ID)
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

  @Field(() => [Room])
  Rooms: Room[];

  @Field(() => [Reservation])
  reserations: Reservation[];

  // skip overwrite 👇
}
