import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {
  hideAgregar: boolean = true;
  constructor() { }

  toggleAgregar(): void{
    this.hideAgregar= !this.hideAgregar;
  }
}
