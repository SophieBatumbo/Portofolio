import { Component, Input } from '@angular/core';
import { Illustration } from '../../../models/model';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() logo!: Illustration | null;
  @Input() navActions!: string[] | null;
  isOpened = false;

  toggleMenu() {
    this.isOpened = !this.isOpened;
  }
}
