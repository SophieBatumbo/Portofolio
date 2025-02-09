import { Component, Input } from '@angular/core';
import { ExperienceComponent } from '../../common-components/experience/experience.component';
import { NgFor } from '@angular/common';
import { Experience } from '../../models/model';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor, ExperienceComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input() workExperiences!: Experience[];
  title!: string;
  //experiences!: ExperienceComponent[];
}
