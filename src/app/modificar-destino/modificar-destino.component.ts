import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AgregarService } from '../Services/agregar.service';
import { DestinoService } from '../Services/destino.service';
import { estado } from '../estados/estado';
import { EstadoService } from '../Services/estado.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import { tipoDestino } from '../destino/tipoDestino';
import { CiudadService } from '../Services/ciudad.service';
import { ciudad } from '../ciudad/ciudad';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { destino } from '../destino/destino';

@Component({
  selector: 'app-modificar-destino',
  templateUrl: './modificar-destino.component.html',
  styleUrls: ['./modificar-destino.component.scss']
})
export class ModificarDestinoComponent implements OnInit {
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  tipoDestinos: tipoDestino[] = [];
  destinoForm: FormGroup;
  loading: boolean;
  destino: destino = null;
  editDestiny: destino;

  constructor(private route: ActivatedRoute, private location: Location, private fb: FormBuilder, public agregarService: AgregarService, private destinoService: DestinoService, private estadoService: EstadoService, private tipoDestinoService: TipoDestinoService, private ciudadService: CiudadService) { }

  ngOnInit() {
    // this.tipoDestinos = this.tipoDestinoService.getOrders();
    this.route.paramMap.subscribe(params => {
      const destinoId = params.get('id');
      if (destinoId) {
        this.getDestino(destinoId);
      }
    });
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
      actividades: this.fb.array([]),
      servicios: this.fb.array([]),

    });

    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.estados.push(estado);
      });
    });

    this.tipoDestinoService.getOrders().subscribe(array => {
      array.map(item => {
        const tipoDestino: tipoDestino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.tipoDestinos.push(tipoDestino);
      });
    });
    this.ciudadService.getOrders().subscribe(array => {
      array.map(item => {
        const ciudad: ciudad = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.ciudades.push(ciudad);
      });
    });

    this.loading = false;

  }

  getDestino(id: string): void {

    this.destinoService.getDestino(id).subscribe(array => {

      const des: destino = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        descripcion: array.payload.get('descripcion'),
        longitud: array.payload.get('longitud'),
        latitud: array.payload.get('latitud'),
        direccion: array.payload.get('direccion'),
        tipoDestinoId: array.payload.get('tipoDestinoId'),
        estadoId: array.payload.get('estadoId'),
        ciudad: array.payload.get('ciudad'),
        actividades: array.payload.get('actividades'),
        servicios: array.payload.get('servicios'),
      }
      this.editDestino(des);
      this.destino = des;


    });

  }

  editDestino(destino: destino) {
    this.editDestiny = destino;
    this.destinoForm.patchValue({
      nombre: destino.nombre,
      imagen: destino.imagen,
      descripcion: destino.descripcion,
      longitud: destino.longitud,
      latitud: destino.latitud,
      direccion: destino.direccion,
      tipoDestinoId: destino.tipoDestinoId,
      estadoId: destino.estadoId,
      ciudad: destino.ciudad,
    });
    this.destinoForm.setControl('img', this.existingImg(destino.img));
    this.destinoForm.setControl('actividades', this.existingActividades(destino.actividades));
    this.destinoForm.setControl('servicios', this.existingServicios(destino.servicios));
  }

  existingImg(img: any[]): FormArray {
    const formArray = new FormArray([]);
    img.forEach(s => {
      formArray.push(this.fb.group({
        path: s.path,
      }));

    });
    return formArray;
  }

  existingActividades(actividades: any[]): FormArray {
    const formArray = new FormArray([]);
    actividades.forEach(s => {
      formArray.push(this.fb.group({
        path: s.path,
      }));

    });
    return formArray;
  }

  existingServicios(servicios: any[]): FormArray {
    const formArray = new FormArray([]);
    servicios.forEach(s => {
      formArray.push(this.fb.group({
        path: s.path,
      }));

    });
    return formArray;
  }

  get imgArray(): FormArray {
    return this.destinoForm.get('img') as FormArray;
  }

  get actividadesArray(): FormArray {
    return this.destinoForm.get('actividades') as FormArray;
  }

  get serviciosArray(): FormArray {
    return this.destinoForm.get('servicios') as FormArray;
  }

  addImg() {
    const img = this.fb.group({
      path: [null, Validators.required],
    });
    this.imgArray.push(img);
  }

  addActividad() {
    const actividad = this.fb.group({
      path: [null, Validators.required],
    });
    this.actividadesArray.push(actividad);
  }

  addServicio() {
    const servicio = this.fb.group({
      path: [null, Validators.required],
    });
    this.serviciosArray.push(servicio);
  }

  removeImg(index) {
    this.imgArray.removeAt(index);
  }

  removeActividad(index) {
    this.actividadesArray.removeAt(index);
  }

  removeServicio(index) {
    this.serviciosArray.removeAt(index);
  }

  submitHandler() {
    console.log(this.destinoForm.value);
  }

  addPost() {

    const mov = {
      nombre: this.destinoForm.value.nombre,
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



    this.destinoService.updateDestino(mov, this.destino.id);
    console.log(this.destinoForm.value);
  }
} 



