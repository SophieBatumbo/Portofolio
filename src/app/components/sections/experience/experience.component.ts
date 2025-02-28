import { Component, Input } from '@angular/core';
import { WorkExperienceComponent } from '../../common/work-experience/work-experience.component';
import { NgFor, NgIf } from '@angular/common';
import { ExperienceSection } from '../../../models/model';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor, NgIf, WorkExperienceComponent, InViewportDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input({required : true}) experienceSection!: ExperienceSection | null;
}
