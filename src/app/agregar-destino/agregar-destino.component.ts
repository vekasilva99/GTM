import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {AgregarService} from '../Services/agregar.service';
import { DestinoService } from '../Services/destino.service';
import {estado} from '../estados/estado';
import {EstadoService} from '../Services/estado.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import {tipoDestino} from '../destino/tipoDestino';
import { CiudadService } from '../Services/ciudad.service';
import {ciudad} from '../ciudad/ciudad';


@Component({
  selector: 'app-agregar-destino',
  templateUrl: './agregar-destino.component.html',
  styleUrls: ['./agregar-destino.component.scss']
})
export class AgregarDestinoComponent implements OnInit {
  estados: estado[]=[];
  ciudades:ciudad[];
  tipoDestinos: tipoDestino[]=[];
  destinoForm: FormGroup;
  loading:boolean;

  constructor(private fb: FormBuilder, public agregarService: AgregarService, private destinoService: DestinoService, private estadoService: EstadoService, private tipoDestinoService: TipoDestinoService, private ciudadService: CiudadService) { }
 
  ngOnInit() {
    // this.tipoDestinos = this.tipoDestinoService.getOrders();
    this.destinoForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      descripcion: [null, Validators.required],
      longitud: [null, Validators.required],
      latitud: [null, Validators.required],
      direccion: [null, Validators.required],
      tipoDestinoId: [null, Validators.required],
      estadoId: [null, Validators.required],
      ciudad: [null, Validators.required],
      img: this.fb.array([]),
      actividades:this.fb.array([]),
      servicios: this.fb.array([]),

    });
    
    this.estadoService.getOrders().subscribe(array=>{
      array.map(item => {
        const estado:estado={
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.estados.push(estado);
      });
    });

    this.tipoDestinoService.getOrders().subscribe(array=>{
      array.map(item => {
        const tipoDestino:tipoDestino={
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.tipoDestinos.push(tipoDestino);
      });
    });
    this.ciudades=this.ciudadService.getOrders();

    this.loading=false;

  }


  get imgArray(): FormArray{
    return this.destinoForm.get('img') as FormArray;
  }

  get actividadesArray(): FormArray{
    return this.destinoForm.get('actividades') as FormArray;
  }

  get serviciosArray(): FormArray{
    return this.destinoForm.get('servicios') as FormArray;
  }

  addImg(){
    const img = this.fb.group({
      path:[null, Validators.required],
    });
    this.imgArray.push(img);
  }

  addActividad(){
    const actividad = this.fb.group({
      path:[null, Validators.required],
    });
    this.actividadesArray.push(actividad);
  }

  addServicio(){
    const servicio = this.fb.group({
      path:[null, Validators.required],
    });
    this.serviciosArray.push(servicio);
  }

  removeImg(index){
    this.imgArray.removeAt(index);
  }

  removeActividad(index){
    this.actividadesArray.removeAt(index);
  }

  removeServicio(index){
    this.serviciosArray.removeAt(index);
  }

  submitHandler(){
    console.log(this.destinoForm.value);
  }

  addPost() {

    const mov = {
      nombre: this.destinoForm.value.nombre ,
      imagen: this.destinoForm.value.imagen,
      descripcion: this.destinoForm.value.descripcion,
      longitud: this.destinoForm.value.longitud,
      latitud: this.destinoForm.value.latitud,
      estadoId: this.destinoForm.value.estadoId,
      ciudad: this.destinoForm.value.ciudad,
      direccion: this.destinoForm.value.direccion,
      tipoDestinoId: this.destinoForm.value.tipoDestinoId,
      img: this.destinoForm.value.img,
      actividades: this.destinoForm.value.actividades,
      servicios: this.destinoForm.value.servicios,
    }

    console.log(this.destinoForm.value);

    this.destinoService.addDestino(mov);
  }
}



