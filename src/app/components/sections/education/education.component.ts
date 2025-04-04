import { Component, Input } from '@angular/core';
import { EducationSection } from '../../../models/model';
import { TimelineComponent } from '../../common/timeline/timeline.component';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TimelineComponent, InViewportDirective, NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
    @Input() education!: EducationSection | null;
}
