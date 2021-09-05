import { Module } from '@nestjs/common';
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
})
export class PlayersModule {}
