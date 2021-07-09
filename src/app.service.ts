import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPossibleNames(name: string): string[] {
    const baseName = name.toUpperCase();
    const possibleNames = this.permute(baseName, 0, baseName.length - 1);

    // TODO: filter out repeated names

    return possibleNames;
  }

  private permute(
    name: string,
    leftIndex: number,
    rightIndex: number,
  ): string[] {
    let names: string[] = [];

    if (leftIndex == rightIndex) {
      names.push(name);
    } else {
      for (let i = leftIndex; i <= rightIndex; ++i) {
        name = this.swapLetters(name, leftIndex, i);
        names = names.concat(this.permute(name, leftIndex + 1, rightIndex));
        name = this.swapLetters(name, leftIndex, i);
      }
    }

    return names;
  }

  private swapLetters(
    name: string,
    leftIndex: number,
    rightIndex: number,
  ): string {
    const letters = name.split('');
    const temp = letters[leftIndex];
    letters[leftIndex] = letters[rightIndex];
    letters[rightIndex] = temp;

    return letters.join('');
  }
}
