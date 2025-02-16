import { Component, Input } from '@angular/core';
import { Education } from '../../models/model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() education!: Education[];
}
