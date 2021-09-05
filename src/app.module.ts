import { Module } from '@nestjs/common';
import { PlayersModule } from '@modules/players/players.module';
import { PlayersController } from './players/players.controller';

@Module({
  imports: [PlayersModule],
  controllers: [PlayersController],
})
export class AppModule {}
