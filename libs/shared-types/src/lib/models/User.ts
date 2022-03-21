import { Reservation } from './Reservation';
import { Field, ObjectType, ID } from 'type-graphql';
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
