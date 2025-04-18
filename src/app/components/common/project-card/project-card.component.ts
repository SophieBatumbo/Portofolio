import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShortNumberPipe } from '../../../pipes/short-number.pipe';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, CommonModule, DecimalPipe, ShortNumberPipe, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() logoPath!: string;
  @Input() title!: string;
  @Input() link!: string;
  @Input() description!: string;
  @Input() keyPoints!: string[];
  @Input() technos!: {name: string, color: string}[];
  @Input() forkNumber!: number;
  @Input() size!: number;
}
