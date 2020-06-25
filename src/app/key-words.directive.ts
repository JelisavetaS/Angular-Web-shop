import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKeyWords]'
})
export class KeyWordsDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#ccccff';
    element.nativeElement.style.color = 'gray';
    element.nativeElement.style.padding = '0 5px';
    element.nativeElement.style.borderRadius = '4px';

    element.nativeElement.title = 'key word';
    
   }

}
