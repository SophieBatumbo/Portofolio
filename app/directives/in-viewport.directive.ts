import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inViewport]',
  standalone: true
})
export class InViewportDirective {

  @Input() treshold: number = 0.5;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
        }
      });
    }, { threshold: this.treshold }); // Détecte quand 50% de l'élément est visible

    observer.observe(this.el.nativeElement);
  }

}
