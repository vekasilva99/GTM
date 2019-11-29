import { Component, OnInit } from '@angular/core';
import { ItinerarioService } from '../Services/itinerario.service';
import { ReservaService } from '../Services/reserva.service';
import { HotelService } from '../Services/hotel/hotel.service';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { Hotel, Hab } from '../class/hotel/hotel';
import { HabitacionService } from '../Services/habitacion.service';
import { estado } from '../estados/estado';
import { ciudad } from '../ciudad/ciudad';
import { reserva, itinerario } from '../reservar/reserva';
import { FormBuilder, FormGroup, Validators, FormArray, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {

  hoteles: Hotel[] = [];
  habs: Hab[] = [];
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  reservas: reserva[] = [];
  itinerario: itinerario = null;
  hab: { hab: string, numH: number }[] = [];
  chequearForm: FormGroup;

  constructor(private fb: FormBuilder, private itinerarioService: ItinerarioService, private reservaService: ReservaService, private hotelService: HotelService, private estadoService: EstadoService, private ciudadService: CiudadService, private habService: HabitacionService) { }

  ngOnInit() {
    this.chequearForm = this.fb.group({
      id: [null, Validators.required],
  
    });

    this.reservaService.getReservasLocal();
    this.reservas = this.reservaService.items;

    this.hotelService.getOrders().subscribe(array => {
      array.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        for (let i = 0; i < this.reservas.length; i++) {
          if (this.reservas[i].hotelId === hotel.id) {
            this.hoteles.push(hotel);
            this.getCiudades(hotel.city);
            this.getEstados(hotel.state);

          }
        }

       
      });
     
      // this.loading = false;
    });
    console.log(this.hoteles);

 
  }

  getEstados(id: string): void {
    this.estadoService.getEstado2(id).subscribe(array => {
      // tslint:disable-next-line: no-shadowed-variable
      const estado: estado = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      };
      this.estados.push(estado);
    });
  }

  getCiudades(id: string): void {
    this.ciudadService.getCiudadSeleccionada(id).subscribe(array => {
      // tslint:disable-next-line: no-shadowed-variable
      const ciudad: ciudad = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        estadoId: array.payload.get('estadoId'),
      };
      this.ciudades.push(ciudad);
    });
  }


  eliminar(reserva:reserva){
    this.reservaService.deleteReservaLocal(reserva);
  }

  

}
