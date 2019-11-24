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
import { destino } from '../destino/destino';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modificar-hotel',
  templateUrl: './modificar-hotel.component.html',
  styleUrls: ['./modificar-hotel.component.scss']
})
export class ModificarHotelComponent implements OnInit {
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  destinos: destino[] = [];
  hotelForm: FormGroup;
  star: number[] = [];
  full:boolean=false;
  loading: boolean;
  selected: string[];
  hotel: Hotel = null;
  editHote: Hotel;
  servicios = [{ value: 'Wifi', viewValue: 'Wifi' }, { value: 'Parking', viewValue: 'Parking' }, { value: 'Restaurant', viewValue: 'Restaurant' }, { value: 'Bar', viewValue: 'Bar' }, { value: 'Piscina', viewValue: 'Piscina' }, { value: 'Traslado', viewValue: 'Traslado' }]

  constructor(private route: ActivatedRoute, private location: Location,private fb: FormBuilder, public agregarService: AgregarService, private estadoService: EstadoService, private ciudadService: CiudadService, private hotelService: HotelService, private destinoService: DestinoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const hotelId = params.get('id');
      if (hotelId) {
        this.getHotel(hotelId);
      }
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
      habs: this.fb.array([]),
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
        destino: array.payload.get('destino'),
        services: array.payload.get('services'),
        fullDayPrice: array.payload.get('fullDayPrice'),
        hotelPictures: array.payload.get('hotelPictures'),
        hab: array.payload.get('habs'),

      
      }
      this.editHotel(h);
      this.hotel = h;


    });

  }
  editHotel(hotel: Hotel) {
    this.editHote = hotel;
    this.hotelForm.patchValue({
      name: hotel.name,
      imagen:hotel.imagen,
      stars: hotel.stars.length,
      state: hotel.state,
      city: hotel.city,
      length: hotel.length,
      latitud: hotel.latitude,
      address: hotel.address,
      fullDay: hotel.fullDay,
      destiny: hotel.destino,
      services: hotel.services,
      fullDayPrice: hotel.fullDayPrice,
      
    });
    console.log(hotel);
    this.hotelForm.setControl('hotelPictures', this.existingHotelPictures(hotel.hotelPictures));
    this.hotelForm.setControl('habs', this.existingHabs(hotel.hab));
    
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
  existingHabs(habs: any[]): FormArray {
    const formArray = new FormArray([]);
    habs.forEach(s => {
      formArray.push(this.fb.group({
        path: s.path,
        habNombre: s.habNombre,
      nightCost: s.nightCost,
      tipoVista: s.tipoVista,
      maxPersonas: s.maxPersonas,
      numHab: s.numHab,
      habPictures: s.habPictures,
      comodidades: s.comodidades,
      }));
     

    });
    return formArray;
  }



  get habsArray(): FormArray {
    return this.hotelForm.get('habs') as FormArray;
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

  addHabPicture(index: number) {
    const img = (this.hotelForm.controls.habs as FormArray).at(index).get('habPictures') as FormArray;
    img.push(this.fb.group({
      path: [''],
    }));

  }

  addComodidad(index: number) {
    const com = (this.hotelForm.controls.habs as FormArray).at(index).get('comodidades') as FormArray;
    com.push(this.fb.group({
      path: [''],
    }));
  }

  addHab() {
    this.habsArray.push(this.fb.group({
      habNombre: [null, Validators.required],
      nightCost: [null, Validators.required],
      tipoVista: [null, Validators.required],
      maxPersonas: [null, Validators.required],
      numHab: [null, Validators.required],
      habPictures: this.fb.array([]),
      comodidades: this.fb.array([]),
    }));

  }

  removeHab(i: number) {
    this.habsArray.removeAt(i);
  }

  removeHabPicture(i: number) {

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
      destiny: this.hotelForm.value.destino,
      address: this.hotelForm.value.address,
      fullDay: this.hotelForm.value.fullDay,
      services: this.selected,
      // fullDayPrice: this.hotelForm.value.fullDayPrice,
      hotelPictures: this.hotelForm.value.hotelPictures,
      habs: this.hotelForm.value.habs,
    };


    this.hotelService.updateHotel(mov, this.hotel.id);
  }
}



