import { Logger } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Profile } from 'passport-discord';
import { Done } from 'src/Utils/Types';

export class SessionSerializer extends PassportSerializer {
  private logger = new Logger(SessionSerializer.name);

  serializeUser(user: Profile, done: Done) {
    this.logger.debug('Serializing user');
    done(null, user);
  }

  async deserializeUser(payload: Profile, done: Done) {
    this.logger.debug('Deserializing user');
    done(null, payload);
  }
}
