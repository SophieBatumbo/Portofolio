import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseHover]',
  standalone: true
})
export class MouseHoverDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter () {
    this.renderer.addClass(this.elem.nativeElement, "hover");
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.renderer.removeClass(this.elem.nativeElement, "hover");
  }

}
