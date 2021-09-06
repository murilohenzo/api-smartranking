import { CreatePlayerDto } from '@modules/players/dto/create.player.dto';
import { IPlayer } from '@modules/players/interfaces/players.interface';
import { IPlayersRepository } from '@modules/players/interfaces/players.repository.interface';
import { Injectable, Logger } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

@Injectable()
export class FakePlayersRepository implements IPlayersRepository {
  private readonly logger = new Logger(FakePlayersRepository.name);
  private readonly _players: IPlayer[] = [];
  async create({
    name,
    email,
    numberPhone,
  }: CreatePlayerDto): Promise<IPlayer> {
    const player: IPlayer = {
      _id: uuid(),
      name,
      email,
      numberPhone,
      ranking: 'A',
      positionRanking: 1,
      urlPlayerPhoto: 'www.aws-s3.com/1231312321',
    };
    this.logger.log(`createPlayerDto: ${JSON.stringify(player)}`);

    this._players.push(player);
    return player;
  }
}
