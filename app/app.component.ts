import { Component } from '@angular/core';
import { NavbarComponent } from "./page-layout/navbar/navbar.component";
import { FooterComponent } from "./page-layout/footer/footer.component";
import { BodyComponent } from "./page-layout/body/body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PersonnalPage';
}
