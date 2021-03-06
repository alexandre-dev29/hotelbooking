import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Room } from './Room';
import { Reservation } from './Reservation';

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

  @Field((_type) => [Room])
  Rooms: Room[];

  @Field((_type) => [Reservation])
  reserations: Reservation[];

  // skip overwrite 👇
}
