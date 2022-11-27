import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { DiscordAuthGuard } from '../utils/Guards';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000');
  }

  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login(@Res() res: Response) {
    res.status(200).end();
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    req.logout(() => {
      this.logger.log('User logged out');
      res.status(200).redirect('http://localhost:3000');
    });
  }
}
