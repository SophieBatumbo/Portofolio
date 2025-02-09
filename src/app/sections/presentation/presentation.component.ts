import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../common-components/button/button.component';
import { Observable } from 'rxjs';
import { Presentation } from '../../models/model';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  @Input() presentation!: Presentation;
  /*pageTitle!: string;
  title!: string;
  description!: string;
  illustrationPath!: string;
  illustrationDesc!: string;*/
}
