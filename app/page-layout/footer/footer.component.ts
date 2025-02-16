import { Component } from '@angular/core';
import { InViewportDirective } from '../../directives/in-viewport.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InViewportDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
