import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(' ').reduce((expense, word) => {
      let uppercase = word[0].toUpperCase()
      word = word.split('')
      word.splice(0, 1, uppercase).join('')
      expense.push(word.join(''))
      return expense
    }, []).join(' ')
  }
}
