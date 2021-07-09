import { Injectable } from '@nestjs/common';
import { BRAZILIAN_NAMES } from './data/brazilian-names.map';
import { SearchResult } from './interfaces/SearchResult';

@Injectable()
export class FindNamesService {
  searchNames(names: string[]): SearchResult[] {
    return BRAZILIAN_NAMES.filter((result) => {
      return names.indexOf(result.name) >= 0;
    }).sort((firstResult, secondResult) => {
      return secondResult.count - firstResult.count;
    });
  }
}
