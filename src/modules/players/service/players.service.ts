import { Inject, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create.player.dto';
import { IPlayer } from '../interfaces/players.interface';
import { IPlayersRepository } from '../interfaces/players.repository.interface';

@Injectable()
export class PlayersService {
  constructor(
    @Inject('PlayersRepository') private _playersRepository: IPlayersRepository,
  ) {}

  async create(player: CreatePlayerDto): Promise<IPlayer> {
    return this._playersRepository.create(player);
  }
}
