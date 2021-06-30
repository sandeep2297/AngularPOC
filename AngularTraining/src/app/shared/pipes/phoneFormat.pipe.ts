import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {

  transform(number: string): any {

    let newStr = "(" + number.substring(0,3) + ") " + number.substring(3,6) + "-" + number.substring(6,number.length);

    return "+1 " + newStr;
  }

}
