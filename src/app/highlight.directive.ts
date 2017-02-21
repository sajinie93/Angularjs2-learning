import {Directive, HostListener, HostBinding} from '@angular/core';
// import {HostBinding} from "../../../my-app/node_modules/@angular/core/src/metadata/directives";

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  private backgroundColor = 'white';

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'white';

  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }


  // constructor(private elementRef: ElementRef, private renderer: Renderer) {
  //   // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  //
  // }

  constructor(){

  }

}
