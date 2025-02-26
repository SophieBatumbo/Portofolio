import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logoPagePath = 'assets/layout/logo.png';
  logoDescription = 'Page logo';

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
