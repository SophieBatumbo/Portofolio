import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input() company!: string;
  @Input() logoPath!: string;
  @Input() jobTitle!: string;
  @Input() period!: string;
  @Input() description!: string;
}
