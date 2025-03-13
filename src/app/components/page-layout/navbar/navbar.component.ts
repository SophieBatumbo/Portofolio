import { Component, Input } from '@angular/core';
import { Illustration, NavAction } from '../../../models/model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() logo!: Illustration | null;
  @Input() navActions!: NavAction[] | null;
  isOpened = false;

  toggleMenu() {
    this.isOpened = !this.isOpened;
  }
}
