import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { DownloadFile, Presentation } from '../../../models/model';
import { DataService } from '../../../services/data.service';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent, InViewportDirective, AsyncPipe, NgIf],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements OnInit {

  @Input({required : true}) presentation!: Presentation | null;
  downloadFile!: Observable<DownloadFile>;

  constructor(private dataService: DataService){}

  ngOnInit (){
    this.downloadFile = this.dataService.getDownloadFileData();
  }

}
