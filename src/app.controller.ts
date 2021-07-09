import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly findNamesService: FindNamesService,
  ) {}

  @Get()
  @Render('index')
  getHello() {
    return {};
  }

  @Get(':name')
  @Render('search-result')
  getNames(@Param('name') name: string) {
    const possibleNames = this.appService.getPossibleNames(name);

    return {
      query: name,
      results: this.findNamesService.searchNames(possibleNames)
    };
  }
}
