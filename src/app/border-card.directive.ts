import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private el: ElementRef;
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#0000ff';
  private defaultHeight: number = 180;
  
  constructor(el: ElementRef) { 
    this.el = el;
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) : void {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string): void {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
}
