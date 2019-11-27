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
import { HabitacionService } from '../Services/habitacion.service';

@Component({
  selector: 'app-modificar-habitacion',
  templateUrl: './modificar-habitacion.component.html',
  styleUrls: ['./modificar-habitacion.component.scss']
})
export class ModificarHabitacionComponent implements OnInit {
  hoteles: Hotel[] = [];
  habForm: FormGroup;
  loading: boolean;
  hab: Hab = null;
  editHabi: Hab;
  constructor(private route: ActivatedRoute, private location: Location, private fb: FormBuilder, public agregarService: AgregarService, private estadoService: EstadoService, private ciudadService: CiudadService, private hotelService: HotelService, private destinoService: DestinoService, private habService: HabitacionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const habId = params.get('id');
      if (habId) {
        this.getHab(habId);
      }
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
    this.habForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      nightCost: [null, Validators.required],
      tipoVista: [null, Validators.required],
      maxPersonas: [null, Validators.required],
      habPictures: this.fb.array([]),
      comodidades: this.fb.array([]),
      numHab: [null, Validators.required],
      hotel: [null, Validators.required],
    });

    this.loading = false;

  }

  getHab(id: string): void {

    this.habService.getHab(id).subscribe(array => {

      const h: Hab = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        nightCost: array.payload.get('nightCost'),
        tipoVista: array.payload.get('tipoVista'),
        maxPersonas: array.payload.get('maxPersonas'),
        habPictures: array.payload.get('habPictures'),
        comodidades: array.payload.get('comodidades'),
        numHab: array.payload.get('numHab'),
        hotel: array.payload.get('hotel'),
      


      }
      this.editHab(h);
      this.hab = h;


    });

}

editHab(hab: Hab) {
  this.editHabi = hab;
  this.habForm.patchValue({
    nombre: hab.nombre,
    imagen: hab.imagen,
    nightCost: hab.nightCost,
    tipoVista: hab.tipoVista,
    maxPersonas: hab.maxPersonas,
    comodidades: hab.comodidades,
    numHab: hab.numHab,
    hotel: hab.hotel,

  });
  this.habForm.setControl('habPictures', this.existingHabPictures(hab.habPictures));
  this.habForm.setControl('comodidades', this.existingComodidades(hab.comodidades));

}

existingHabPictures(habPictures: any[]): FormArray {
  const formArray = new FormArray([]);
  habPictures.forEach(s => {
    formArray.push(this.fb.group({
      path: s.path,
    }));

  });
  return formArray;
}
existingComodidades(comodidades: any[]): FormArray {
  const formArray = new FormArray([]);
  comodidades.forEach(s => {
    formArray.push(this.fb.group({
      path: s.path,
    }));

  });
  return formArray;
}
addHabPicture() {
  const img = this.fb.group({
    path: [null, Validators.required],
  });

  this.habPicturesArray.push(img);
}

get habPicturesArray(): FormArray {
  return this.habForm.get('habPictures') as FormArray;
}

removeHabPicture(i: number) {
  this.habPicturesArray.removeAt(i);
}


addComodidades() {
  const img = this.fb.group({
    path: [null, Validators.required],
  });

  this.comodidadesArray.push(img);
}

get comodidadesArray(): FormArray {
  return this.habForm.get('comodidades') as FormArray;
}

removeComodidades(i: number) {
  this.comodidadesArray.removeAt(i);
}


addPost() {


  const mov = {
    nombre: this.habForm.value.nombre,
    imagen: this.habForm.value.imagen,
    nightCost: this.habForm.value.nightCost,
    tipoVista: this.habForm.value.tipoVista,
    maxPersonas: this.habForm.value.maxPersonas,
    habPictures: this.habForm.value.habPictures,
    comodidades: this.habForm.value.comodidades,
    numHab: this.habForm.value.numHab,
    hotel: this.habForm.value.hotel,
  };



  this.habService.updateHab(mov,this.hab.id);
}


}
