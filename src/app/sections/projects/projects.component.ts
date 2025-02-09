import { Component, Input } from '@angular/core';
import { CardComponent } from "../../common-components/card/card.component";
import { NgFor, NgIf } from '@angular/common';
import { Project } from '../../models/model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projects!: Project[];
  /*cards!: Card[];
  illustrationPath!: string;
  illustrationDesc!: string;*/
}
