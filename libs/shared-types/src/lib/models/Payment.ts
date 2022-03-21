import { Field, ObjectType, ID } from 'type-graphql';
import { Transation } from './Transation';

@ObjectType()
export class Payment {
  @Field(() => ID)
  paymentId: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Transation, { nullable: true })
  Transation?: Transation;

  @Field({ nullable: true })
  transationTransactionId?: string;

  // skip overwrite 👇
}
