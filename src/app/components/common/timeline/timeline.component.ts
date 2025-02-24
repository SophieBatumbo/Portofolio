import { Component, Input } from '@angular/core';
import { Education } from '../../../models/model';
import { NgFor } from '@angular/common';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, InViewportDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() education!: Education[];
}
