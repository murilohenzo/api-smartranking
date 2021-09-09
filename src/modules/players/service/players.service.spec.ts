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
    expect(
      await service.create({
        name: 'John Doe',
        email: 'john@doe.com',
        numberPhone: '551111111',
      }),
    ).toHaveProperty('_id');
  });

  it('should be able findAll players', async () => {
    await service.create({
      name: 'John Doe',
      email: 'john@doe.com',
      numberPhone: '551111111',
    });
    await service.create({
      name: 'John Doe',
      email: 'john@doe.com',
      numberPhone: '551111111',
    });
    await service.create({
      name: 'John Doe',
      email: 'john@doe.com',
      numberPhone: '551111111',
    });
    expect(await service.findAll()).toHaveLength(3);
  });

  it('should be not able findAll players', async () => {
    expect.assertions(1);
    try {
      await service.findAll();
    } catch (error) {
      expect(error.message).toBe('Not existent players found.');
    }
  });
});
