import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreatePlayerDto } from '../dto/create.player.dto';
import { IPlayer } from '../interfaces/players.interface';
import { PlayersService } from '../service/players.service';

@ApiTags('api/v1/players')
@Controller('api/v1/players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    description: 'Create a new player',
  })
  @ApiOkResponse({
    description: 'Player created successfully',
    type: CreatePlayerDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access.',
  })
  @ApiNotFoundResponse({ description: 'Player already exists.' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async create(@Body() player: CreatePlayerDto): Promise<IPlayer> {
    return this.playersService.create(player);
  }
}
