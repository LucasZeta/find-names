import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FindNamesService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });

  describe('getPossibleNames', () => {
    it('should return list of possible names', () => {
      expect(appService.getPossibleNames('ana')).toStrictEqual(
        expect.arrayContaining(['ANA', 'AAN', 'NAA']),
      );
    });
  });
});
