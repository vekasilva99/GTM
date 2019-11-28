import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import { tipoDestino } from '../destino/tipoDestino';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { destino } from '../destino/destino';
import { estado } from '../estados/estado';
import { Hotel, Hab, disp } from '../class/hotel/hotel';
import { DisponibilidadService } from '../Services/disponibilidad.service';
import { ReservaService } from '../Services/reserva.service';
import { ItinerarioService } from '../Services/itinerario.service';
import { reserva } from './reserva';
import { EstadoService } from '../Services/estado.service';
import { HotelService } from '../Services/hotel/hotel.service';
import { HabitacionService } from '../Services/habitacion.service';
import { DestinoService } from '../Services/destino.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  reservarForm: FormGroup;
  tipoDestinos: tipoDestino[] = [];
  destinos: destino[] = [];
  estados: estado[] = [];
  hoteles: Hotel[] = [];
  habs: Hab[] = [];
  itinerario: string[] = [];
  disp: disp = new disp();
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  minDate: Date;
  maxDate: Date;
  checkIn: Date;
  checkOut: Date;
  days: number;
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  dateForm: FormGroup;
  costoReserva: number;
  costoItinerario: number;
  res: [{ tipoHab: string, numHab: number }];
  reservas: string[] = [];
  selectedDestino: string = null;
  selectedHotel: string = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private tipoDestinoService: TipoDestinoService, private disponibilidadService: DisponibilidadService, private reservaService: ReservaService, private itinerarioService: ItinerarioService, private estadoService: EstadoService, private hotelService: HotelService, private habService: HabitacionService, private destinoService: DestinoService) {

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });


  }








  ngOnInit() {

    this.reservarForm = this.fb.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      cedula: [null, Validators.required],
      email: [null, Validators.required],
      telefono: [null, Validators.required],
      direccion: [null, Validators.required],
      estatus: [null, Validators.required],
      hotelId: [null, Validators.required],
      destinoId: [null, Validators.required],
      tipoDestinoId:[null, Validators.required],
      estadoId:[null, Validators.required],
      habId: [null, Validators.required],
      costo: [null, Validators.required],
      numHab: [null, Validators.required],

    });

    this.dateForm = this.fb.group({
      range: null
    });

    this.tipoDestinoService.getOrders().subscribe(array => {
      array.map(item => {
        const tipoDestino: tipoDestino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.tipoDestinos.push(tipoDestino);
      });
    });

    this.destinoService.getOrders().subscribe(array => {
      array.map(item => {
        const destino: destino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
  
        this.destinos.push(destino);
      });
    });

    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
  
        this.estados.push(estado);
      });
    });

    this.hotelService.getOrders().subscribe(array => {
      array.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
  
        this.hoteles.push(hotel);
      });
    });

    this.habService.getOrders().subscribe(array => {
      array.map(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
  
        this.habs.push(hab);
      });
    });

  }
  
  pasoDestino(){
    this.selectedDestino=this.reservarForm.value.destinoId;
    console.log(this.selectedDestino);
  }

  changeDestino(selectedValue:string){
    this.selectedDestino=selectedValue;


  }

  changeHotel(selectedValue:string){
    this.selectedHotel=selectedValue;
    this.getHabs(this.selectedHotel);
    console.log(this.habs);

  }

 getHabs(id: string): void {
    this.habService.getOrders().subscribe(array => {
      array.map(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        if (id === hab.hotel) {
          this.habs.push(hab);
        }
      });
    });
  }





fechaReservacion() {
  this.checkIn = this.dateForm.value.range[0];
  this.checkOut = this.dateForm.value.range[1];
  this.days = (this.checkOut.getTime() - this.checkIn.getTime()) / 86400000;

}

addPost() {

  const mov = {
    hotelId: this.reservarForm.value.hotelId,
    fechaLlegada: this.checkIn,
    fechaSalida: this.checkOut,
    hab: this.res,
    costo: this.costoReserva,
  }
  this.reservaService.addReserva(mov).then(item => {
    if (this.reservas.length === 0) {
      const itin = {
        nombre: this.reservarForm.value.nombre,
        apellido: this.reservarForm.value.apellido,
        cedula: this.reservarForm.value.email,
        telefono: this.reservarForm.value.telefono,
        direccion: this.reservarForm.value.direccion,
        estatus: 'Sin Pagar',
        reserva: this.reservas,
        costoTotal: this.costoItinerario

      }
      this.reservas.push(item.id);


    }

  });

}
}



