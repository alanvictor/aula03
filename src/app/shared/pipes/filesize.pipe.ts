import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: any, extension = 'MB'): any {
    let calculatedValue: any;

    switch (extension) {
      case 'KB':
        calculatedValue = value / 1024;
        break;
      case 'MB':
        calculatedValue = value / Math.pow(1024, 2);
        break;
      case 'GB':
        calculatedValue = value / Math.pow(1024, 3);
        break;
    }

    if (isNaN(calculatedValue)) {
      return '';
    }

    return this.formatedValue(calculatedValue, extension);
  }

  private formatedValue(value, extension) {
    return `${value.toFixed(0)}${extension}`;
  }

}
