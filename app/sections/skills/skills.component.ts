import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skills } from '../../models/model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skills!: Skills;
  //title!: string;
  //logosPath!: string[];
  //skills!: string[];
  /*illustrationPath!: string;
  illustrationDesc!: string;*/
}
