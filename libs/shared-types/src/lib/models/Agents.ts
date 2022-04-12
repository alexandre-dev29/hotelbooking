import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from './Role';
import { Hotel } from './Hotel';

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

  @Field((_type) => Role, { nullable: true })
  Role?: Role;

  @Field({ nullable: true })
  roleRoleId?: string;

  @Field((_type) => Hotel, { nullable: true })
  Hotel?: Hotel;

  @Field({ nullable: true })
  hotelHotelId?: string;

  // skip overwrite 👇
}
