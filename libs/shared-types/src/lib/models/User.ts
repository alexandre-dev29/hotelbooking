import { ObjectType, Field, ID } from 'type-graphql';
import { Reservation } from './Reservation';

@ObjectType()
export class User {
  @Field(() => ID)
  userId: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field()
  phoneNumber: string;

  @Field()
  location: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Reservation])
  reserations: Reservation[];

  // skip overwrite 👇
}
