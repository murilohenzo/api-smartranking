import { Module } from '@nestjs/common';
import { PlayersController } from './controller/players.controller';
import { FakePlayersRepository } from './repository/fake/players.fake.repository';
import { PlayersService } from './service/players.service';

@Module({
  providers: [
    PlayersService,
    {
      provide: 'PlayersRepository',
      useClass: FakePlayersRepository,
    },
  ],
  controllers: [PlayersController],
})
export class PlayersModule {}
