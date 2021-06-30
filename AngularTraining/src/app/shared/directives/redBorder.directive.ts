import { Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRedBorder]'
})
export class RedBorderDirective {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { 
  }

  @Input() set appRedBorder(lengthCondition: boolean) {
    if (lengthCondition) {
      // this.eleRef.nativeElement.style.border = '1px solid red';
      this.renderer.setStyle(this.eleRef.nativeElement, 'border', '1px solid red');
    } 
  }

}
