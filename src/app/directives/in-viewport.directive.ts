import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInViewport]',
  standalone: true
})
export class InViewportDirective implements AfterViewInit {

  @Input() treshold = 0.5;

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.elem.nativeElement, 'visible');
        }
      });
    }, { threshold: this.treshold }); // Détecte quand 50% de l'élément est visible

    observer.observe(this.elem.nativeElement);
  }

}
