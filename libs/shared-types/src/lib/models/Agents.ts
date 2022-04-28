import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Agents {
  @Field((_type) => ID)
  agentId: string;

  @Field()
  agentName: string;

  @Field()
  agentPhoneNumber: string;

  @Field()
  hotelId: string;

  @Field()
  roleId: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  roleRoleId?: string;

  @Field({ nullable: true })
  hotelHotelId?: string;

  // skip overwrite 👇
}
