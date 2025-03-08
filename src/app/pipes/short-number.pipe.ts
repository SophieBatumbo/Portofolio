import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
  standalone: true
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '0';

    const thousandsUnits = value/1000;

    if (thousandsUnits >= 1 && thousandsUnits < 10000) {
      return thousandsUnits.toFixed(1).replace(/\.0$/, '').toString() + "K";
    }
    if (thousandsUnits >= 10000) {
      const millionUnits = thousandsUnits/1000;
      return millionUnits.toFixed(1).replace(/\.0$/, '').toString() + "M";
    }

    return value.toString();
  }

}
