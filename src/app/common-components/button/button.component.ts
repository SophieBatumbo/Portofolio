import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DownloadFile } from '../../models/model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() action!: string;
  @Input() downloadFile!: DownloadFile;
  @Input() mail : boolean = false;

}
