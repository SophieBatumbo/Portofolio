import { Component, Input } from '@angular/core';
import { ExperienceComponent } from '../../common/experience/experience.component';
import { NgFor, NgIf } from '@angular/common';
import { ExperienceSection } from '../../../models/model';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor, NgIf, ExperienceComponent, InViewportDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input({required : true}) experienceSection!: ExperienceSection | null;
}
