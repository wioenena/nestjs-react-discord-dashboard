import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { DiscordStrategy } from './utils/DiscordStrategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  controllers: [AuthController],
  providers: [DiscordStrategy, SessionSerializer]
})
export class AuthModule {}
