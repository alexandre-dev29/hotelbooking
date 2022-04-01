import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  emailAddress?: string;

  @Field()
  phoneNumber: string;

  @Field()
  password: string;

  @Field()
  location: string;
}
