import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  @Output() outsideClick = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const navList = document.querySelector('.nav-actions');

    if(!navList) return;

    const clickedInside = this.elementRef.nativeElement.contains(target);
    const isVisible = navList!.classList.contains('visible');

    if (!clickedInside && isVisible) {
      this.outsideClick.emit(event);
    }
  }

}
