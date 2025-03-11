import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { NavbarComponent } from "./components/page-layout/navbar/navbar.component";
import { BodyComponent } from "./components/page-layout/body/body.component";
import { FooterComponent } from './components/page-layout/footer/footer.component';
import { DataService } from './services/data.service';
import { Observable, of } from 'rxjs';
import { Illustration, NavAction } from './models/model';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BodyComponent, FooterComponent, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portofolio';
  navLogo$: Observable<Illustration> = of();
  navActions$: Observable<NavAction[]> = of();
  isBodyLoaded: WritableSignal<boolean> = signal(false); 

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.navLogo$ = this.dataService.getNavLogoData();
    this.navActions$ = this.dataService.getNavActions();
  }

  updateBodyStatus(status: boolean) {
    this.isBodyLoaded.set(status); 
  }
}
