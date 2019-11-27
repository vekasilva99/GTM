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
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipoDestinoService } from '../Services/tipo-destino.service';

@Component({
  selector: 'app-modificar-hotel',
  templateUrl: './modificar-hotel.component.html',
  styleUrls: ['./modificar-hotel.component.scss']
})
export class ModificarHotelComponent implements OnInit {
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  destinos: destino[] = [];
  tipoDestinos: tipoDestino[] = [];
  hotelForm: FormGroup;
  star: number[] = [];
  full: boolean = false;
  loading: boolean;
  selected: string[];
  hotel: Hotel = null;
  editHote: Hotel;
  servicios = [{ value: 'Wifi', viewValue: 'Wifi' }, { value: 'Parking', viewValue: 'Parking' }, { value: 'Restaurant', viewValue: 'Restaurant' }, { value: 'Bar', viewValue: 'Bar' }, { value: 'Piscina', viewValue: 'Piscina' }, { value: 'Traslado', viewValue: 'Traslado' }]

  constructor(private route: ActivatedRoute, private location: Location, private fb: FormBuilder, public agregarService: AgregarService, private estadoService: EstadoService, private ciudadService: CiudadService, private hotelService: HotelService, private destinoService: DestinoService, private tipoDestinoService: TipoDestinoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const hotelId = params.get('id');
      if (hotelId) {
        this.getHotel(hotelId);
      }
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
    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.estados.push(estado);
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
      services: [null, Validators.required],
      fullDayPrice: [null, Validators.required],
      hotelPictures: this.fb.array([]),
    });

    this.loading = false;



  }

  getHotel(id: string): void {

    this.hotelService.getHotel2(id).subscribe(array => {

      const h: Hotel = {
        id: array.payload.id,
        name: array.payload.get('name'),
        imagen: array.payload.get('imagen'),
        stars: array.payload.get('stars'),
        state: array.payload.get('state'),
        length: array.payload.get('length'),
        latitude: array.payload.get('latitud'),
        address: array.payload.get('address'),
        city: array.payload.get('city'),
        fullDay: array.payload.get('fullDay'),
        destino: array.payload.get('destiny'),
        tipoDestino:array.payload.get('tipoDestiny'),
        services: array.payload.get('services'),
        fullDayPrice: array.payload.get('fullDayPrice'),
        hotelPictures: array.payload.get('hotelPictures'),
      


      }
      this.editHotel(h);
      this.hotel = h;


    });

  }
  editHotel(hotel: Hotel) {
    this.editHote = hotel;
    this.hotelForm.patchValue({
      name: hotel.name,
      imagen: hotel.imagen,
      stars: hotel.stars.length,
      state: hotel.state,
      city: hotel.city,
      length: hotel.length,
      latitud: hotel.latitude,
      address: hotel.address,
      fullDay: hotel.fullDay,
      destiny: hotel.destino,
      tipoDestiny: hotel.tipoDestino,
      services: hotel.services,
      fullDayPrice: hotel.fullDayPrice,

    });
    console.log(hotel);
    this.hotelForm.setControl('hotelPictures', this.existingHotelPictures(hotel.hotelPictures));
    

  }

  existingHotelPictures(hotelPictures: any[]): FormArray {
    const formArray = new FormArray([]);
    hotelPictures.forEach(s => {
      formArray.push(this.fb.group({
        path: s.path,
      }));

    });
    return formArray;
  }
 

  existingImages(pictures: any[]) {
    const formArray = new FormArray([]);

    pictures.forEach(elem => {
      formArray.push(this.fb.group({
        path: elem.path
      }));
    });

    return formArray;
  }





  get comodidadesArray(): FormArray {
    return this.hotelForm.get('comodidades') as FormArray;
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

  removeComodidad(i: number) {
    this.comodidadesArray.removeAt(i);
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
      tipoDestiny:this.hotelForm.value.tipoDestiny,
      address: this.hotelForm.value.address,
      fullDay: this.hotelForm.value.fullDay,
      services: this.selected,
      // fullDayPrice: this.hotelForm.value.fullDayPrice,
      hotelPictures: this.hotelForm.value.hotelPictures,
    };


    this.hotelService.updateHotel(mov, this.hotel.id);
  }
}



