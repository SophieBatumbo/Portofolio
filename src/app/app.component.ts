import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./components/page-layout/navbar/navbar.component";
import { BodyComponent } from "./components/page-layout/body/body.component";
import { FooterComponent } from './components/page-layout/footer/footer.component';
import { DataService } from './services/data.service';
import { Observable, of } from 'rxjs';
import { Illustration, NavAction } from './models/model';
import { AsyncPipe, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/page-layout/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoaderComponent, NavbarComponent, BodyComponent, FooterComponent, AsyncPipe, NgIf],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0, scale: 0.7 }),
        animate('400ms, ease-in', style({ opacity: 1, scale: 1 }))
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portofolio';
  navLogo$: Observable<Illustration> = of();
  navActions$: Observable<NavAction[]> = of();

  constructor(
    public loaderService: LoaderService, 
    private dataService: DataService 
  ){}

  ngOnInit(): void {
    this.navLogo$ = this.dataService.getNavLogoData();
    this.navActions$ = this.dataService.getNavActions();
    this.loaderService.hideLoader();
  }

}
