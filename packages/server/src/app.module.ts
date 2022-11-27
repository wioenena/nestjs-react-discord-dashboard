import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { entities } from './typeorm/entities';
import { UsersModule } from './users/users.module';
import { GuildModule } from './guild/guild.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development'
    }),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: Number(process.env.MYSQL_DB_PORT),
      username: process.env.MYSQL_DB_USERNAME,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_DATABASE,
      synchronize: true,
      entities
    }),
    UsersModule,
    AuthModule,
    GuildModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
