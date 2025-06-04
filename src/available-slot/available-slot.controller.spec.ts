import { Test, TestingModule } from '@nestjs/testing';
import { AvailableSlotController } from './available-slot.controller';
import { AvailableSlotService } from './available-slot.service';

describe('AvailableSlotController', () => {
    let controller: AvailableSlotController;
    let service: AvailableSlotService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AvailableSlotController],
            providers: [
                {
                    provide: AvailableSlotService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        update: jest.fn(),
                        remove: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<AvailableSlotController>(AvailableSlotController);
        service = module.get<AvailableSlotService>(AvailableSlotService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});