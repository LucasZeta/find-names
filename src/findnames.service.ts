import { Injectable } from '@nestjs/common';
import { BRAZILIAN_NAMES } from './data/brazilian-names.map';
import { SearchResult } from './interfaces/SearchResult';

@Injectable()
export class FindNamesService {
  searchNames(names: string[]): SearchResult[] {
    const resultList: SearchResult[] = [];

    names.forEach((name) => {
      const match = BRAZILIAN_NAMES.find((result) => result.name == name);

      if (match) {
        resultList.push(match);
      }
    });

    return resultList;
  }
}
