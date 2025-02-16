import { Component, Input } from '@angular/core';
import { Education } from '../../models/model';
import { TimelineComponent } from '../../common-components/timeline/timeline.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
    @Input() education!: Education[];
}
