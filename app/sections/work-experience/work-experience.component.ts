import { Component, Input } from '@angular/core';
import { ExperienceComponent } from '../../common-components/experience/experience.component';
import { NgFor } from '@angular/common';
import { Experience } from '../../models/model';
import { InViewportDirective } from '../../directives/in-viewport.directive';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor, ExperienceComponent, InViewportDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input() workExperiences!: Experience[];
  title!: string;
}
