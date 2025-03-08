import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { DownloadFile, PresentationSection } from '../../../models/model';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { NgFor, NgIf } from '@angular/common';
import { MouseHoverDirective } from '../../../directives/mouse-hover.directive';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent, InViewportDirective, NgIf, NgFor, MouseHoverDirective],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  @Input() presentation!: PresentationSection | null;
  @Input() downloadFile!: DownloadFile | null;
}
