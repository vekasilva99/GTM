import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModificarService {
  hideModificar: boolean = true;
  constructor() { }

  toggleModificar(): void{
    this.hideModificar= !this.hideModificar;
  }
}
