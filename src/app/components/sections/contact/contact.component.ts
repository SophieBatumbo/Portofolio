import { Component, Input } from '@angular/core';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { NotificationComponent } from '../../common/notification/notification.component';
import { ContactSection } from '../../../models/model';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, InViewportDirective, NotificationComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input({required: true}) contact!: ContactSection | null;

  copyMail() {
    const elemToCopy = document.querySelector(".purpose .mail p")!.textContent;
    if(elemToCopy) {
      navigator.clipboard.writeText(elemToCopy);
    }
    const result = elemToCopy ? "success" : "fail";
    document.querySelector("p.notification")?.classList.add("visible", result);
    setTimeout(() => {
      document.querySelector("p.notification")?.classList.remove("visible", result);
    }, 
    8000); 
  }

}
