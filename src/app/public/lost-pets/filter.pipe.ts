import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(petList: any[], filter: string): any[] {
    // console.log(petList);
    return petList || [];
  }

}
