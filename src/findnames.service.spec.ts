import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';

describe('FindNamesService', () => {
  let findNamesService: FindNamesService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FindNamesService],
    }).compile();

    findNamesService = app.get<FindNamesService>(FindNamesService);
  });

  describe('searchNames', () => {
    it('should return information stored in local database', () => {
      expect(findNamesService.searchNames(['ANA'])).toStrictEqual([{
        name: 'ANA',
        count: 3089858,
      }]);
    });

    it('should filter out information not contained in local database', () => {
      expect(findNamesService.searchNames(['ANA', 'A121NA'])).toStrictEqual([{
        name: 'ANA',
        count: 3089858,
      }]);
    });

    it('should return empty array when search parameters are not contained in local database', () => {
      expect(findNamesService.searchNames(['A121NA', 'LOREMIPSUM'])).toStrictEqual([]);
    });
  });
});
