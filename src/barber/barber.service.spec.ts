import { Test, TestingModule } from '@nestjs/testing';
import { BarberService } from './barber.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BarberService', () => {
  let service: BarberService;
  let prisma: PrismaService;

  const mockPrisma = {
    barber: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BarberService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<BarberService>(BarberService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all barbers', async () => {
    mockPrisma.barber.findMany.mockResolvedValue([{ id: '1', name: 'Barbeiro 1' }]);
    const barbers = await service.findAll();
    expect(barbers).toHaveLength(1);
    expect(mockPrisma.barber.findMany).toHaveBeenCalled();
  });

});
