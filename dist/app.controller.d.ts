import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';
export declare class AppController {
    private readonly appService;
    private readonly findNamesService;
    constructor(appService: AppService, findNamesService: FindNamesService);
    getHello(): {};
    getNames(name: string): {
        query: string;
        results: import("./interfaces/SearchResult").SearchResult[];
    };
}
