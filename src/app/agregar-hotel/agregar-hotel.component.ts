import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ControlContainer } from '@angular/forms';
import { AgregarService } from '../Services/agregar.service';
import { DestinoService } from '../Services/destino.service';
import { estado } from '../estados/estado';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { ciudad } from '../ciudad/ciudad';
import { Hotel, Hab } from '../class/hotel/hotel';
import { HotelService } from '../Services/hotel/hotel.service';
import { destino, tipoDestino } from '../destino/destino';
import { TipoDestinoService } from '../Services/tipo-destino.service';


@Component({
  selector: 'app-agregar-hotel',
  templateUrl: './agregar-hotel.component.html',
  styleUrls: ['./agregar-hotel.component.scss']
})
export class AgregarHotelComponent implements OnInit {
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  destinos: destino[] = [];
  tipoDestinos: tipoDestino[]=[];
  hotelForm: FormGroup;
  star: number[] = [];
  full:boolean=false;
  loading: boolean;
  selected: string[];
  servicios = [{ value: 'Wifi', viewValue: 'Wifi' }, { value: 'Parking', viewValue: 'Parking' }, { value: 'Restaurant', viewValue: 'Restaurant' }, { value: 'Bar', viewValue: 'Bar' }, { value: 'Piscina', viewValue: 'Piscina' }, { value: 'Traslado', viewValue: 'Traslado' }]

  constructor(private fb: FormBuilder, public agregarService: AgregarService, private estadoService: EstadoService, private ciudadService: CiudadService, private hotelService: HotelService, private destinoService: DestinoService, private tipoDestinoService: TipoDestinoService) { }

  ngOnInit() {
    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.estados.push(estado);
      });
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

    this.ciudadService.getOrders().subscribe(array => {
      array.map(item => {
        const ciudad: ciudad = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.ciudades.push(ciudad);
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

    this.hotelForm = this.fb.group({
      name: [null, Validators.required],
      imagen: [null, Validators.required],
      stars: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      length: [null, Validators.required],
      latitud: [null, Validators.required],
      address: [null, Validators.required],
      fullDay: [null, Validators.required],
      destiny: [null, Validators.required],
      tipoDestiny: [null, Validators.required],
      services: [null, Validators.required],
      fullDayPrice: [null, Validators.required],
      hotelPictures: this.fb.array([]),
    });

    this.loading = false;



  }






  addHotelPicture() {
    const img = this.fb.group({
      path: [null, Validators.required],
    });

    this.hotelPicturesArray.push(img);
  }

  get hotelPicturesArray(): FormArray {
    return this.hotelForm.get('hotelPictures') as FormArray;
  }




  removeHotelPicture(i: number) {
    this.hotelPicturesArray.removeAt(i);
  }












  addPost() {


    for (let i = 0; i < this.hotelForm.value.stars; i++) {
      this.star[i] = i + 1;
    }

    const mov = {
      name: this.hotelForm.value.name,
      imagen: this.hotelForm.value.imagen,
      stars: this.star,
      length: this.hotelForm.value.length,
      latitud: this.hotelForm.value.latitud,
      state: this.hotelForm.value.state,
      city: this.hotelForm.value.city,
      destiny: this.hotelForm.value.destiny,
      address: this.hotelForm.value.address,
      fullDay: this.hotelForm.value.fullDay,
      services: this.selected,
      fullDayPrice: 49,
      hotelPictures: this.hotelForm.value.hotelPictures,
    };

    console.log(this.selected);

    this.hotelService.addHotel(mov);
  }
}



