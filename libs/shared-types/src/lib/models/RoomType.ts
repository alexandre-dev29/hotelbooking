import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { RoomTypeEnum } from '../types/enums/RoomTypeEnum';

@ObjectType()
export class RoomType {
  @Field((_type) => ID)
  roomTypeId: string;

  @Field()
  roomTypeDescription: string;

  @Field((_type) => RoomTypeEnum)
  roomType: RoomTypeEnum;

  @Field((_type) => Float)
  price: number;

  @Field((_type) => Int)
  capacity: number;

  @Field()
  wifi: boolean;

  @Field()
  Ac: boolean;

  @Field()
  heater: boolean;

  @Field((_type) => Int, { nullable: true })
  rating?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // skip overwrite 👇
}
