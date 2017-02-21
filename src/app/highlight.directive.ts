import {Directive, HostListener, HostBinding, Input} from '@angular/core';
// import {HostBinding} from "../../../my-app/node_modules/@angular/core/src/metadata/directives";

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  private backgroundColor: string;

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;

  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('dirHighlight') highlightColor = 'green';

  constructor(){

  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }



}
