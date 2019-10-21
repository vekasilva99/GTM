import { Injectable } from '@angular/core';
import {estado} from '../estados/estado';
import {ESTADOS} from '../estados/mock-estados';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  getEstados(): Observable<estado[]>{
    return of(ESTADOS);
  }

  getEstado(id:number): Observable<estado>{
    return of(ESTADOS.find(estado =>estado.id === id));
  }
}
