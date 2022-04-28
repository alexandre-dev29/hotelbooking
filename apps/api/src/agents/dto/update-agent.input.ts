import { CreateAgentInput } from './create-agent.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAgentInput extends PartialType(CreateAgentInput) {
  @Field(() => String)
  agentId: string;

  @Field(() => String)
  agentName: string;

  @Field(() => String)
  agentPhoneNumber: string;

  @Field(() => String)
  roleId: string;
}
