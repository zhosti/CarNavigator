import { DatePipe, getLocaleDateTimeFormat, formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe {
  transform(value: any, args?: any): any {
    let hours = value.getMinutes() < 10 ? '0' + value.getHours() : value.getHours();
    let minutes = value.getMinutes() < 10 ? '0' + value.getMinutes() : value.getMinutes();
    let seconds = value.getSeconds() < 10 ? '0' + value.getSeconds() : value.getSeconds();

    return hours + ':' + minutes + ':' + seconds;
  }
}