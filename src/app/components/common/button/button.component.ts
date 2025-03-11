import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DownloadFile } from '../../../models/model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() action!: string;
  @Input() downloadFile!: DownloadFile | null;
  @Input() isMailTo = false;
  @Input() isExternalLink = false;
  @Input() externalLink: string | undefined;
  @Input() pictogramPath: string | undefined;
  @Input() isSmall = false;
}
