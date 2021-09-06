import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ description: 'The number phone of the player' })
  readonly numberPhone: string;

  @ApiProperty({ description: 'The e-mail of the player' })
  readonly email: string;

  @ApiProperty({ description: 'The name of the player' })
  readonly name: string;
}
