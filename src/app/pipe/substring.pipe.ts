import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length >= 6) {
      value = value.substring(0, 6) + "...";
    }
    return value;
  }

}
