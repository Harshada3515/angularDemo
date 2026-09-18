import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial',
  standalone: true
})
export class InitialPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

     if(value !==null && value !== undefined && value!==''){
      return value.split(' ').map(word=>word[0]).join('').toUpperCase();
    }
    else{
      return "NA";
    }
  }

}
