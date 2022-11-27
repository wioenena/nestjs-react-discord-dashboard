import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import 'reflect-metadata';
import { AppModule } from './app.module';

const PORT = process.env.PORT ?? 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Initialize app
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
      }
    })
  );

  app.setGlobalPrefix('api');
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000'
  });
  app.use(passport.initialize());
  app.use(passport.session());

  const logger = new Logger('Main (main.ts)');

  console.log(process.env.PORT);

  await app.listen(PORT);
  logger.log(`Server running on port ${PORT}`);
}
bootstrap();
