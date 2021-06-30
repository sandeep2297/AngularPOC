import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFibo',
  pure: false
})
export class ImpureFiboPipe implements PipeTransform {

  transform(fibo : number[]): number {
    let sum = 0;
    for(let i =0; i<fibo.length; i++) {
      sum = sum + fibo[i];
    }
    return sum;
  }

}
