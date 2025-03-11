import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Illustration } from '../../../models/model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input() company!: string;
  @Input() logoPath!: string;
  @Input() jobTitle!: string;
  @Input() period!: string;
  @Input() description!: string;
  @Input() skillsLogos: Illustration[] | undefined;
}
