import { Component, Input } from '@angular/core';
import { Education } from '../../../models/model';
import { TimelineComponent } from '../../common/timeline/timeline.component';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TimelineComponent, InViewportDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
    @Input() education!: Education[];
}
