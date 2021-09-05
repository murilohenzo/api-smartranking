import { Test, TestingModule } from '@nestjs/testing';
import { FakePlayersRepository } from '../repository/fake/players.fake.repository';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayersService,
        {
          provide: 'PlayersRepository',
          useClass: FakePlayersRepository,
        },
      ],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be able created new player', async () => {
    expect(await service.create({ name: 'John Doe' })).toHaveProperty('_id');
  });
});
