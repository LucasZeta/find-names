"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindNamesService = void 0;
const common_1 = require("@nestjs/common");
const brazilian_names_map_1 = require("./data/brazilian-names.map");
let FindNamesService = class FindNamesService {
    searchNames(names) {
        return brazilian_names_map_1.BRAZILIAN_NAMES.filter((result) => {
            return names.indexOf(result.name) >= 0;
        }).sort((firstResult, secondResult) => {
            return secondResult.count - firstResult.count;
        });
    }
};
FindNamesService = __decorate([
    common_1.Injectable()
], FindNamesService);
exports.FindNamesService = FindNamesService;
//# sourceMappingURL=findnames.service.js.map