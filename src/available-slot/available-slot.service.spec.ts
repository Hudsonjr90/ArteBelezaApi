import { Test, TestingModule } from '@nestjs/testing';
import { AvailableSlotService } from './available-slot.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AvailableSlotService', () => {
  let service: AvailableSlotService;
  let prisma: PrismaService;

  const mockPrisma = {
    availableSlot: {
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
        AvailableSlotService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<AvailableSlotService>(AvailableSlotService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all available slots', async () => {
    mockPrisma.availableSlot.findMany.mockResolvedValue([{ id: '1', startTime: new Date(), endTime: new Date() }]);
    const slots = await service.findAll();
    expect(slots).toHaveLength(1);
    expect(mockPrisma.availableSlot.findMany).toHaveBeenCalled();
  });

  // Outros testes podem ser adicionados conforme necessário...
});
