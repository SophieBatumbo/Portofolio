import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = signal(true);

  hideLoader() {
    setTimeout(() => this.isLoading.set(false), 3500); 
  }
}
