import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskMobile',
  standalone: true
})
export class MaskMobilePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if(value !==null && value !== undefined && value!==''){
      return "********"+ value.slice(-2);
    }
    else{
      return "NA";
    }
  }

}
