import { Injectable } from '@nestjs/common';
import { BRAZILIAN_NAMES } from './data/brazilian-names.map';
import { SearchResult } from './interfaces/SearchResult';

@Injectable()
export class FindNamesService {
  searchNames(names: string[]): SearchResult[] {
    const resultList: SearchResult[] = BRAZILIAN_NAMES.filter((result) => {
      return names.indexOf(result.name) >= 0
    });

    return resultList;
  }
}
