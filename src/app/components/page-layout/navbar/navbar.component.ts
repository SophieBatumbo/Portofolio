import { Component, Input } from '@angular/core';
import { Illustration } from '../../../models/model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input({required: true}) logo!: Illustration | null;
  @Input({required: true}) navActions!: string[] | null;

  /** MOBILE RESPONSIVE DESIGN **/
  displayActions() {
    document.querySelector("nav")?.classList.add("mobil");
    document.querySelector(".nav-actions")?.classList.add("visible");
  }

  hideActions() {
    const slideUp =
    [
      { transform: "translateY(17%)" },
      {
        transform: "translateY(0%)"
      },
    ];

    document.querySelector(".nav-actions")?.animate(
      slideUp, {
        duration: 2000,
        iterations: 1,
      }
    );
    document.querySelector("nav")?.classList.remove("mobil");
    document.querySelector(".nav-actions")?.classList.remove("visible");
  }
}
