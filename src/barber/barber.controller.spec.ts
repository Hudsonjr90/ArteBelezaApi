import { Test, TestingModule } from '@nestjs/testing';
import { BarberController } from './barber.controller';
import { BarberService } from './barber.service';

describe('BarberController', () => {
    let controller: BarberController;
    let service: BarberService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BarberController],
            providers: [
                {
                    provide: BarberService,
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

        controller = module.get<BarberController>(BarberController);
        service = module.get<BarberService>(BarberService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});