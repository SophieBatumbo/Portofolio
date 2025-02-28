import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./components/page-layout/navbar/navbar.component";
import { BodyComponent } from "./components/page-layout/body/body.component";
import { FooterComponent } from './components/page-layout/footer/footer.component';
import { DataService } from './services/data.service';
import { Observable, of } from 'rxjs';
import { Illustration } from './models/model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BodyComponent, FooterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portofolio';
  navLogo$: Observable<Illustration> = of();
  navActions$: Observable<string[]> = of();

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.navLogo$ = this.dataService.getNavLogoData();
    this.navActions$ = this.dataService.getNavActions();
  }
}
