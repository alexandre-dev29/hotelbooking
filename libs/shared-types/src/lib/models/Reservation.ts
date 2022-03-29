import { Field, ObjectType, ID } from 'type-graphql';
import { User } from './User';
import { Hotel } from './Hotel';
import { RoomType } from './RoomType';

@ObjectType()
export class Reservation {
  @Field((_type) => ID)
  reservationId: string;

  @Field()
  guestList: string;

  @Field({ nullable: true })
  checkIn?: Date;

  @Field({ nullable: true })
  CheckOut?: Date;

  @Field()
  balanceAmount: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field((_type) => User, { nullable: true })
  User?: User;

  @Field({ nullable: true })
  userId?: string;

  @Field((_type) => Hotel, { nullable: true })
  Hotel?: Hotel;

  @Field({ nullable: true })
  hotelId?: string;

  @Field((_type) => RoomType, { nullable: true })
  RoomType?: RoomType;

  @Field({ nullable: true })
  roomTypeId?: string;

  // skip overwrite 👇
}
