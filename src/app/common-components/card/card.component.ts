import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, CommonModule, DecimalPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() logoPath!: string;
  @Input() title!: string;
  @Input() link!: string;
  @Input() description!: string;
  @Input() spotPoints!: string[];
  @Input() technos!: {name: string, color: string}[];
  @Input() forkNumber!: string;
  @Input() size!: number;
}
