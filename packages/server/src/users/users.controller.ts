import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Req,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  @Get('me')
  @UseGuards(AuthenticatedGuard)
  async me(@Req() req: Request) {
    if (!req.user)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    return req.user;
  }
}
