import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../common-components/button/button.component';
import { DownloadFile, Presentation } from '../../models/model';
import { DataService } from '../../services/data.service';
import { InViewportDirective } from '../../directives/in-viewport.directive';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent, InViewportDirective],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  @Input() presentation!: Presentation;
  @Input() downloadFile!: DownloadFile;

  constructor(private dataService: DataService){}

  ngOnInit (){
    this.dataService.getDownloadFileData().subscribe(
      data => this.downloadFile = data
    );
  }

}
