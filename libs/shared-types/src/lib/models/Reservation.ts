import { Field, ObjectType, ID } from 'type-graphql';
import { User } from './User';
import { Hotel } from './Hotel';
import { RoomType } from './RoomType';

@ObjectType()
export class Reservation {
  @Field(() => ID)
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

  @Field(() => User, { nullable: true })
  User?: User;

  @Field({ nullable: true })
  userId?: string;

  @Field(() => Hotel, { nullable: true })
  Hotel?: Hotel;

  @Field({ nullable: true })
  hotelId?: string;

  @Field(() => RoomType, { nullable: true })
  RoomType?: RoomType;

  @Field({ nullable: true })
  roomTypeId?: string;

  // skip overwrite 👇
}
