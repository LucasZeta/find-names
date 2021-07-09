import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FindNamesService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should be empty', () => {
      expect(appController.getHello()).toStrictEqual({});
    });
  });

  describe('root/:name', () => {
    it('should return searched term', () => {
      expect(appController.getNames('lorem')).toStrictEqual(
        expect.objectContaining({ query: 'lorem' }),
      );
    });

    it('should return names that were found', () => {
      expect(appController.getNames('bailes')).toStrictEqual(
        expect.objectContaining({
          results: expect.arrayContaining([
            {
              name: 'ISABEL',
              count: 239654,
            },
            {
              name: 'SIBELA',
              count: 36,
            },
          ]),
        }),
      );
    });
  });
});
