import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value >= 1 ? value + '%' : 0 + '%'
  }

}
