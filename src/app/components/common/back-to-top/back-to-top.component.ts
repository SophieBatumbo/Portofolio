import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isVisible = window.scrollY > window.innerHeight * 0.75;
  }

  scrollToTop(): void {
    document.querySelector('#presentation')?.scrollIntoView({ behavior: 'smooth' });
  }
}
