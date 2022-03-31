import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Transation } from './Transation';

@ObjectType()
export class Payment {
  @Field((_type) => ID)
  paymentId: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field((_type) => Transation, { nullable: true })
  Transation?: Transation;

  @Field({ nullable: true })
  transationTransactionId?: string;

  // skip overwrite 👇
}
