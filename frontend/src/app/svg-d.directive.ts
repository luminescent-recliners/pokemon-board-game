import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSvgD]'
})
export class SvgDDirective {

  @Input('appSvgD') pathString = '';

  constructor(
    private element: ElementRef,
  ) { 
    this.set( this.pathString );
  }

  set = ( path: string) => {
    this.element.nativeElement.d = path;
  }

  


}
