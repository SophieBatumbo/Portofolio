import { Component, Input } from '@angular/core';
import { ProjectCardComponent } from "../../common/project-card/project-card.component";
import { NgFor, NgIf } from '@angular/common';
import { ProjectSection } from '../../../models/model';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, NgIf, InViewportDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input({required : true}) projectSection!: ProjectSection | null;
}
