import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';

describe('AppointmentController', () => {
    let controller: AppointmentController;
    let service: AppointmentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppointmentController],
            providers: [
                {
                    provide: AppointmentService,
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

        controller = module.get<AppointmentController>(AppointmentController);
        service = module.get<AppointmentService>(AppointmentService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});