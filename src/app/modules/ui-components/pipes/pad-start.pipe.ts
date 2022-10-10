import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padStart'
})
export class PadStartPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value).padStart(2, '0');
  }

}
