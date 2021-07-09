import { Injectable } from '@nestjs/common';
import { BRAZILIAN_NAMES } from './data/brazilian-names.map';
import { SearchResult } from './interfaces/SearchResult';

@Injectable()
export class FindNamesService {
  searchNames(names: string[]): SearchResult[] {
    const matches: SearchResult[] = [];

    names.forEach((name) => {
      if (BRAZILIAN_NAMES[name]) {
        matches.push({
          name,
          count: BRAZILIAN_NAMES[name]
        });
      }
    });

    return matches.sort((firstResult, secondResult) => {
      return secondResult.count - firstResult.count;
    });
  }
}
