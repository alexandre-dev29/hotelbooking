import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Payment } from './Payment';

@ObjectType()
export class Transation {
  @Field((_type) => ID)
  transactionId: string;

  @Field((_type) => Float)
  amountTransation: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field((_type) => [Payment])
  Payments: Payment[];

  // skip overwrite 👇
}
