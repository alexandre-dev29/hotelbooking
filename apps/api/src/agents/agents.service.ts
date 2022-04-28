import { Injectable } from '@nestjs/common';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { PrismaService } from '@hotelbooking/utility';
import { Agents, Hotel, Role } from '@hotelbooking/shared-types';

@Injectable()
export class AgentsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAgentInput: CreateAgentInput): Promise<Agents> {
    return this.prismaService.agents.create({
      data: {
        hotelId: createAgentInput.hotelId,
        roleId: createAgentInput.roleId,
        agentName: createAgentInput.agentName,
        agentPhoneNumber: createAgentInput.agentPhoneNumber,
      },
    });
  }

  async findAll(): Promise<Agents[]> {
    return await this.prismaService.agents.findMany({
      include: { Role: true },
    });
  }

  async findOne(agentId: string): Promise<Agents> {
    return await this.prismaService.agents.findUnique({
      where: { agentId },
      include: { Role: true, Hotel: true },
    });
  }

  async update(
    agentId: string,
    updateAgentInput: UpdateAgentInput
  ): Promise<Agents> {
    return await this.prismaService.agents.update({
      where: { agentId: updateAgentInput.agentId },
      data: {
        agentName: updateAgentInput.agentName,
        agentPhoneNumber: updateAgentInput.agentPhoneNumber,
        roleId: updateAgentInput.roleId,
      },
    });
  }

  async remove(agentId: string): Promise<Agents> {
    return await this.prismaService.agents.delete({ where: { agentId } });
  }

  async getRoleOfAgent(agent: Agents): Promise<Role> {
    return await this.prismaService.role.findUnique({
      where: { roleId: agent.roleId },
    });
  }

  async getHotelOfAgent(agent: Agents): Promise<Hotel> {
    return await this.prismaService.hotel.findUnique({
      where: { hotelId: agent.hotelId },
    });
  }
}
