import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create.player.dto';
import { IPlayer } from '../interfaces/players.interface';
import { IPlayersRepository } from '../interfaces/players.repository.interface';

@Injectable()
export class PlayersService {
  constructor(
    @Inject('PlayersRepository') private _playersRepository: IPlayersRepository,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<IPlayer> {
    return await this._playersRepository.create(createPlayerDto);
  }

  async findAll(): Promise<IPlayer[]> {
    const players = await this._playersRepository.findAll();
    if (players.length > 0) {
      return players;
    }
    throw new HttpException(
      'Not existent players found.',
      HttpStatus.NOT_FOUND,
    );
  }
}
