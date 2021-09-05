import { CreatePlayerDto } from '../dto/create.player.dto';
import { IPlayer } from './players.interface';

export interface IPlayersRepository {
  create(player: CreatePlayerDto): Promise<IPlayer>;
}
