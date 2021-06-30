import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureFibo'
})
export class PureFiboPipe implements PipeTransform {

  transform(fibo: number[]): any {
    let sum = 0;
    for(let i =0; i<fibo.length; i++) {
      sum = sum + fibo[i];
    }
    return sum;
  }

}
