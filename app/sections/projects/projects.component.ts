import { Component, Input } from '@angular/core';
import { CardComponent } from "../../common-components/card/card.component";
import { NgFor, NgIf } from '@angular/common';
import { Projects } from '../../models/model';
import { InViewportDirective } from '../../directives/in-viewport.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, NgFor, InViewportDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projects!: Projects;
}
