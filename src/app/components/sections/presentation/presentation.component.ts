import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { DownloadFile, PresentationSection } from '../../../models/model';
import { DataService } from '../../../services/data.service';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { MouseHoverDirective } from '../../../directives/mouse-hover.directive';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent, InViewportDirective, AsyncPipe, NgIf, NgFor, MouseHoverDirective],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements OnInit {

  @Input({required : true}) presentation!: PresentationSection | null;
  downloadFile!: Observable<DownloadFile>;

  constructor(private dataService: DataService){}

  ngOnInit (){
    this.downloadFile = this.dataService.getDownloadFileData();
  }

}
