"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    getPossibleNames(name) {
        const baseName = name.toUpperCase();
        const possibleNames = this.permute(baseName, 0, baseName.length - 1);
        return possibleNames;
    }
    permute(name, leftIndex, rightIndex) {
        let names = [];
        if (leftIndex == rightIndex) {
            names.push(name);
        }
        else {
            for (let i = leftIndex; i <= rightIndex; ++i) {
                name = this.swapLetters(name, leftIndex, i);
                names = names.concat(this.permute(name, leftIndex + 1, rightIndex));
                name = this.swapLetters(name, leftIndex, i);
            }
        }
        return names;
    }
    swapLetters(name, leftIndex, rightIndex) {
        const letters = name.split('');
        const temp = letters[leftIndex];
        letters[leftIndex] = letters[rightIndex];
        letters[rightIndex] = temp;
        return letters.join('');
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map