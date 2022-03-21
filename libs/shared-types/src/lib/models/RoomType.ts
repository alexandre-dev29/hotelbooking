import { Field, ObjectType, ID, Int } from 'type-graphql';
import { RoomTypeEnum } from '../types/enums/RoomTypeEnum';
import { Reservation } from './Reservation';

@ObjectType()
export class RoomType {
  @Field(() => ID)
  roomTypeId: string;

  @Field()
  roomTypeDescription: string;

  @Field(() => RoomTypeEnum)
  roomType: RoomTypeEnum;

  @Field()
  price: number;

  @Field(() => Int)
  capacity: number;

  @Field()
  wifi: boolean;

  @Field()
  Ac: boolean;

  @Field()
  heater: boolean;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Reservation])
  reserations: Reservation[];

  // skip overwrite 👇
}
