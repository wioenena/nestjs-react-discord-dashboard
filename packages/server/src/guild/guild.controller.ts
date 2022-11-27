import { Controller, Get, Param } from '@nestjs/common';
import { BotService } from 'src/bot/bot.service';

@Controller('guild')
export class GuildController {
  constructor(private readonly botService: BotService) {}

  @Get('/:id')
  async getGuildById(@Param('id') id: string) {
    if (id) {
      return (
        this.botService.bot.guilds.cache.get(id) ?? { message: 'Not found' }
      );
    }

    return 'bb';
  }
}
