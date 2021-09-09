import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { response } from 'express';
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

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    description: 'Find all players',
  })
  @ApiOkResponse({
    description: 'Players found successfully',
    type: [CreatePlayerDto],
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access.',
  })
  @ApiNotFoundResponse({ description: 'Not existent players found.' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async findAll(@Res() response): Promise<IPlayer[]> {
    try {
      return response.json(this.playersService.findAll());
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}
