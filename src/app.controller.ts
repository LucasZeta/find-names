import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly findNamesService: FindNamesService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get(':name')
  getNames(@Param('name') name: string) {
    const possibleNames = this.appService.getPossibleNames(name);
    return this.findNamesService.searchNames(possibleNames);
  }
}
