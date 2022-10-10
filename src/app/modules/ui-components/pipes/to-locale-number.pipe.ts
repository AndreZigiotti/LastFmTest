import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleNumber'
})
export class ToLocaleNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const language = navigator.language || 'pt-BR'

    if(typeof value !== 'string' && typeof value !== 'number') {
      return value
    }

    if(typeof value === 'string') {
      value = parseInt(value)
    }

    return Intl.NumberFormat(language).format(value as number)
  }

}
