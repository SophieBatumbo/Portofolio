import { Component } from '@angular/core';
import { NavbarComponent } from "./components/page-layout/navbar/navbar.component";
import { BodyComponent } from "./components/page-layout/body/body.component";
import { FooterComponent } from './components/page-layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PersonnalPage';
}
