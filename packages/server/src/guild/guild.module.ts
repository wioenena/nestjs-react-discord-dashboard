import { Module } from '@nestjs/common';
import { BotModule } from 'src/bot/bot.module';
import { GuildController } from './guild.controller';

@Module({
  imports: [BotModule],
  controllers: [GuildController]
})
export class GuildModule {}
