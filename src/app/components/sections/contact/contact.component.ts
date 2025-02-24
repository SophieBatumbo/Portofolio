import { Component } from '@angular/core';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { NotificationComponent } from '../../common/notification/notification.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InViewportDirective, NotificationComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  copyMail() {
    let elemToCopy = document.querySelector(".purpose .mail p")!.textContent;
    if(elemToCopy) {
      navigator.clipboard.writeText(elemToCopy);
    }
    let result = elemToCopy ? "success" : "fail";
    document.querySelector("p.notification")?.classList.add("visible", result);
    setTimeout(() => {
      document.querySelector("p.notification")?.classList.remove("visible", result);
    }, 
    8000); 
  }

}
