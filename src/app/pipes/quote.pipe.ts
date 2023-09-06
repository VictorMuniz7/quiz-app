import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {



  transform(value: string): string {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = value;
    return textArea.value;

  }

}
