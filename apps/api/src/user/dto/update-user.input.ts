import { CreateUserInput } from './create-user.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field()
  userId: string;
}
