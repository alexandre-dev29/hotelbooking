import { AuthUserModule } from '@hotelbooking/auth-user';
import { UtilityModule } from '@hotelbooking/utility';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UtilityModule, AuthUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
