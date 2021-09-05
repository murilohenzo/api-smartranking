import { CreatePlayerDto } from '@modules/players/dto/create.player.dto';
import { IPlayer } from '@modules/players/interfaces/players.interface';
import { IPlayersRepository } from '@modules/players/interfaces/players.repository.interface';
import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

@Injectable()
export class FakePlayersRepository implements IPlayersRepository {
  private readonly _players: IPlayer[] = [];
  async create(player: CreatePlayerDto): Promise<IPlayer> {
    Object.assign(player, { _id: uuid() });
    this._players.push(player);
    return player;
  }
}
