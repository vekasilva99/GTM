import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
  checkIn: Date = null;
  checkOut: Date = null;
  days: number;
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  dateForm: FormGroup;
  numH: number;
  costoReserva: number = 0;
  res: { tipoHab: string, numHab: number }[] = [];
  reservas: string[] = [];
  selectedDestino: string = null;
  selectedHotel: string = null;
  disponibilidad: disp = null;
  hab: Hab = null;
  available: boolean=true;
  month:number=0;
  reserva:reserva;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private tipoDestinoService: TipoDestinoService, private disponibilidadService: DisponibilidadService, private reservaService: ReservaService, private itinerarioService: ItinerarioService, private estadoService: EstadoService, private hotelService: HotelService, private habService: HabitacionService, private destinoService: DestinoService) {

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });


  }








  ngOnInit() {

    this.reservarForm = this.fb.group({
      hotelId: [null, Validators.required],
      destinoId: [null, Validators.required],
      tipoDestinoId: [null, Validators.required],
      estadoId: [null, Validators.required],
      habId: new FormArray([]),
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

  get habsArray(): FormArray {
    return this.reservarForm.get('habs') as FormArray;
  }

  pasoDestino() {
    this.selectedDestino = this.reservarForm.value.destinoId;
    console.log(this.selectedDestino);
  }

  changeDestino(selectedValue: string) {
    this.selectedDestino = selectedValue;



  }
  // changeNumHab(event: any) {
  //   this.numH = this.reservarForm.value.numHab;
  //   console.log(this.numH);

  // }

  changeNumHab(id: string, selectedValue: any) {
    console.log(id, selectedValue);
    const mov = {
      tipoHab: id,
      numHab: selectedValue
    }
    this.getHab(id, selectedValue);

    this.res.push(mov);

    this.costoReservacion();
    
   
    // this.getDisponibilidad(this.hab.disponibilidad);
    // this.disponibilidadService.reservar(this.checkIn.getMonth(), this.checkIn.getDay(),this.days, selectedValue);
    // this.disponibilidadService.updateDisponibilidad(this.disponibilidadService.disp2,this.disponibilidad.id);

  };


  changeDate(selectedValue: any) {
    this.checkIn = selectedValue[0];
    this.checkOut = selectedValue[1];
    this.days = (this.checkOut.getTime() - this.checkIn.getTime()) / 86400000;
    console.log(this.checkOut);
  }




  changeHotel(selectedValue: string) {
    this.selectedHotel = selectedValue;
    this.habs = [];
    this.getHabs(this.selectedHotel);
    console.log(this.habs);

  }

  getHabs(id: string): void {
    this.habService.getOrders().subscribe(array => {
      array.map(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };



        if (id === hab.hotel) {
          this.habs.push(hab);

        }

      });
    });
    // console.log(this.disponibilidad);
  }

  getHab(id: string, num: number): void {
    console.log(this.checkIn);
    this.habService.getOrders().subscribe(array => {
      array.map(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        if (id === hab.id) {
          this.hab = hab;
          this.getDisponibilidad(hab.disponibilidad, num);


        }

      });
    });
    // console.log(this.disponibilidad);
  }


  getDisponibilidad(id: string,  num: number) {
    this.disponibilidadService.getOrders().subscribe(array => {
      array.map(item => {
        const dispo: disp = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        if(id === dispo.id) {
          this.disponibilidad = dispo;
          console.log(this.month);
          console.log(this.checkIn.getDate());
          console.log(this.days);
          console.log(num);
          this.disponibilidadService.disp2 = this.disponibilidad;
          this.available=this.disponibilidadService.reservar(this.month,this.checkIn.getDate(), this.days, num);
          console.log(this.disponibilidadService.disp2);
          
        }
      });
    });
    this.disponibilidadService.updateDisponibilidad(this.disponibilidadService.disp2, id);
  }



  fechaReservacion() {
    this.checkIn = this.dateForm.value.range[0];
    this.checkOut = this.dateForm.value.range[1];
    this.days = (this.checkOut.getTime() - this.checkIn.getTime()) / 86400000;
    this.month=this.checkIn.getMonth();


  }

  costoReservacion() {
    for (let i = 0; i < this.res.length; i++) {
      this.habService.getOrders().subscribe(array => {
        array.map(item => {
          const hab: Hab = {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };


          if (this.res[i].tipoHab === hab.id) {
            this.costoReserva = this.costoReserva + (hab.nightCost * this.res[i].numHab*this.days);

          }
        });
      });
    }
  }

  addPost() {
    let array = [];

    const reserva: reserva = this.reservarForm.value as reserva;

    reserva.costo = this.costoReserva;
    reserva.fechaSalida = this.checkOut;
    reserva.fechaLlegada= this.checkIn;
    reserva.hab =this.res;
    reserva.hotelId=this.selectedHotel;


    if (localStorage.getItem('cart') !== null) {
      array = JSON.parse(localStorage.getItem('cart'));
    }
    array.push(reserva);

    localStorage.setItem('cart', JSON.stringify(array));
    this.resetForm();

    this.resetForm();

  }

  resetForm() {
    this.selectedDestino = null;
    this.selectedHotel = null;
    this.habs = null;
    this.res = [];
    // this.disponibilidad = [];
    this.numH = 0;


    this.reservarForm.patchValue({
      hotelId: '',
      destinoId: '',
      tipoDestinoId: '',
      estadoId: '',
      habId: '',
      costo: '',
      numHab: '',
    });

  }
}



