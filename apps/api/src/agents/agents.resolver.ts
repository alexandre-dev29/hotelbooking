import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AgentsService } from './agents.service';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { Agents, Hotel, Role } from '@hotelbooking/shared-types';

@Resolver(() => Agents)
export class AgentsResolver {
  constructor(private readonly agentsService: AgentsService) {}

  @Mutation(() => Agents)
  createAgent(@Args('createAgentInput') createAgentInput: CreateAgentInput) {
    return this.agentsService.create(createAgentInput);
  }

  @Query(() => [Agents], { name: 'getAllAgents' })
  findAll() {
    return this.agentsService.findAll();
  }

  @Query(() => Agents, { name: 'getOneAgent' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.agentsService.findOne(id);
  }

  @Mutation(() => Agents)
  updateAgent(@Args('updateAgentInput') updateAgentInput: UpdateAgentInput) {
    return this.agentsService.update(
      updateAgentInput.agentId,
      updateAgentInput
    );
  }

  @Mutation(() => Agents)
  removeAgent(@Args('id', { type: () => String }) id: string) {
    return this.agentsService.remove(id);
  }

  @ResolveField('Role', () => Role)
  async role(@Parent() agent: Agents): Promise<Role> {
    return await this.agentsService.getRoleOfAgent(agent);
  }

  @ResolveField('Hotel', () => Hotel)
  async hotel(@Parent() agent: Agents): Promise<Hotel> {
    return await this.agentsService.getHotelOfAgent(agent);
  }
}
