import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {AgregarService} from '../Services/agregar.service';
import { DestinoService } from '../Services/destino.service';
import {estado} from '../estados/estado';
import {EstadoService} from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import {ciudad} from '../ciudad/ciudad';
import {Hotel, Hab} from '../class/hotel/hotel';
import {HotelService} from '../Services/hotel/hotel.service';


@Component({
  selector: 'app-agregar-hotel',
  templateUrl: './agregar-hotel.component.html',
  styleUrls: ['./agregar-hotel.component.scss']
})
export class AgregarHotelComponent implements OnInit {
  estados: estado[];
  ciudades: ciudad[];
  hotelForm: FormGroup;

  constructor(private fb: FormBuilder, public agregarService: AgregarService, private destinoService: DestinoService, private estadoService: EstadoService, private ciudadService: CiudadService, private hotelService: HotelService) { }
 
  ngOnInit() {
    this.estadoService.getOrders().subscribe(array=>{
      array.map(item => {
        const estado:estado={
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.estados.push(estado);
      });
    });
    this.ciudades = this.ciudadService.getOrders();
    this.hotelForm = this.fb.group({
      name: [null, Validators.required],
      stars: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      length: [null, Validators.required],
      latitud: [null, Validators.required],
      address: [null, Validators.required],
      fullDay: [null, Validators.required],
      fullDayPrice: [null, Validators.required],
      hotelPictures: this.fb.array([
        this.addHotelPicturesGroup()
      ]),
      habs:this.fb.array([
        this.addHabsGroup()
      ]),
     

    });

    

  }

  addHotelPicturesGroup(){
    return this.fb.group({
      hotelPicturesPath:[null, Validators.required],
      
    });
  }

  addHabsGroup(){
    return this.fb.group({
      habNombre:[null, Validators.required],
      nightCost:[null, Validators.required],
      tipoVista:[null, Validators.required],
      maxPersonas:[null, Validators.required],
      numHab:[null, Validators.required],
      habPictures:this.fb.array([
        this.addHabPicturesGroup()
      ]),
      comodidades:this.fb.array([
        this.addComodidades()
      ]),
    });
  }

  addHabPicturesGroup(){
    return this.fb.group({
      habPicturesPath:[null, Validators.required]
    });
  }

  addComodidadesGroup(){
    return this.fb.group({
      comodidadesPath:[null, Validators.required]
    });
  }

  get hotelPicturesArray(): FormArray{
    return this.hotelForm.get('hotelPictures') as FormArray;
  }

  get habsArray(): FormArray{
    return this.hotelForm.get('habs') as FormArray;
  }

  get comodidadesArray(): FormArray{
    return this.hotelForm.get('Comodidades') as FormArray;
  }

  get habPicturesArray(): FormArray{
    return this.hotelForm.get('habPictures') as FormArray;
  }

  addHotelPictures(){
    this.hotelPicturesArray.push(this.addHotelPicturesGroup());
  }

  addHabs(){
    this.habsArray.push(this.addHabsGroup());
  }

  addHabPictures(){
    this.habPicturesArray.push(this.addHabPicturesGroup());
  }

  addComodidades(){
    this.comodidadesArray.push(this.addComodidadesGroup());
  }

  removeHotelPictures(index){
    this.hotelPicturesArray.removeAt(index);
  }

  removeHabs(index){
    this.habsArray.removeAt(index);
  }

  removeHabPictures(index){
    this.habPicturesArray.removeAt(index);
  }

  removeComodidades(index){
    this.comodidadesArray.removeAt(index);
  }

  submitHandler(){
    console.log(this.hotelForm.value);
  }

  addPost() {

    const mov = {
      name: this.hotelForm.value.name ,
      // imagen: this.hotelForm.value.imagen,
      stars: this.hotelForm.value.stars,
      length: this.hotelForm.value.length,
      latitud: this.hotelForm.value.latitud,
      state: this.hotelForm.value.state,
      city: this.hotelForm.value.city,
      address: this.hotelForm.value.address,
      fullDay: this.hotelForm.value.fullDay,
      fullDayPrice: this.hotelForm.value.fullDayPrice,
      hotelPictures: this.hotelForm.value.hotelPictures,
      habs: this.hotelForm.value.hab,
    }

    console.log(this.hotelForm.value);

    this.hotelService.addHotel(mov);
  }
}



