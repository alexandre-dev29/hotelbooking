import { Field, ObjectType, ID } from 'type-graphql';
import { Payment } from './Payment';

@ObjectType()
export class Transation {
  @Field(() => ID)
  transactionId: string;

  @Field()
  amountTransation: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Payment])
  Payments: Payment[];

  // skip overwrite 👇
}
