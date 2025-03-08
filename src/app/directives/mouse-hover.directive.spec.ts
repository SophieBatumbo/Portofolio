import { ElementRef, Renderer2 } from '@angular/core';
import { MouseHoverDirective } from './mouse-hover.directive';

let elem!: ElementRef;
let renderer!: Renderer2;

describe('MouseHoverDirective', () => {
  it('should create an instance', () => {
    const directive = new MouseHoverDirective( elem, renderer);
    expect(directive).toBeTruthy();
  });
});
