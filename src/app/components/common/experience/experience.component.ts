import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() company!: string;
  @Input() logoPath!: string;
  @Input() jobTitle!: string;
  @Input() period!: string;
  @Input() description!: string;
}
