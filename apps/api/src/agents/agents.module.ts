import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsResolver } from './agents.resolver';
import { PrismaService } from '@hotelbooking/utility';

@Module({
  providers: [AgentsResolver, AgentsService, PrismaService],
})
export class AgentsModule {}
