import { Injectable, Logger } from '@nestjs/common';
import client from 'bot';

@Injectable()
export class BotService {
  bot: typeof client;
  private readonly logger = new Logger(BotService.name);
  constructor() {
    this.bot = client;

    this.bot.login(process.env.DISCORD_BOT_TOKEN);
    this.bot.once('ready', () => {
      this.logger.log('Bot is ready');
    });
  }
}
