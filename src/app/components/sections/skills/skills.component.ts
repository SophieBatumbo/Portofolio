import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillSection } from '../../../models/model';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf, NgFor, InViewportDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skills!: SkillSection | null;
}
