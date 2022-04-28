import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAgentInput {
  @Field(() => String, { description: 'The Id Of the hotel' })
  hotelId: string;

  @Field(() => String, { description: 'The Role Id' })
  roleId: string;

  @Field(() => String, { description: 'The Agent Name' })
  agentName: string;

  @Field(() => String, { description: 'The Agent Phone Number' })
  agentPhoneNumber: string;
}
