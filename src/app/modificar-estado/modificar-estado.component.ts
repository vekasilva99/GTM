import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EstadoService } from '../Services/estado.service';
import { estado } from '../estados/estado';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modificar-estado',
  templateUrl: './modificar-estado.component.html',
  styleUrls: ['./modificar-estado.component.scss']
})
export class ModificarEstadoComponent implements OnInit {
  estadoForm: FormGroup;
  estado: estado = null;
  editState: estado;
  constructor(private route: ActivatedRoute, private location: Location, private fb: FormBuilder, private estadoService: EstadoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const estadoId = params.get('id');
      if (estadoId) {
        this.getEstado(estadoId);
      }
    });

    this.estadoForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      cultura: [null, Validators.required],
      inicio: [null, Validators.required],
      img: this.fb.array([
        this.addImgGroup()
      ]),
      gastronomia: this.fb.array([
        this.addGastronomiaGroup()
      ]),

    });

  }

  getEstado(id: string): void {

    this.estadoService.getEstado2(id).subscribe(array => {

      const es: estado = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      }
      this.editEstado(es);
      this.estado = es;


    });

  }

  editEstado(estado: estado) {
    this.editState = estado;
    this.estadoForm.patchValue({
      nombre: estado.nombre,
      imagen: estado.imagen,
      cultura: estado.cultura,
      inicio: estado.inicio,
    });
    this.estadoForm.setControl('img', this.existingImg(estado.img));
    this.estadoForm.setControl('gastronomia', this.existingGastronomia(estado.gastronomia));
  }

  existingImg(img: any[]): FormArray {
    const formArray = new FormArray([]);
    img.forEach(s => {
      formArray.push(this.fb.group({
        imgPath: s.imgPath,
      }));

    });
    return formArray;
  }

  existingGastronomia(gastronomia: any[]): FormArray {
    const formArray = new FormArray([]);
    gastronomia.forEach(s => {
      formArray.push(this.fb.group({
        gastronomiaPath: s.gastronomiaPath,
      }));

    });
    return formArray;
  }



  addImgGroup() {
    return this.fb.group({
      imgPath: [null, Validators.required]
    });
  }

  addGastronomiaGroup() {
    return this.fb.group({
      gastronomiaPath: [null, Validators.required]
    });
  }

  get imgArray(): FormArray {
    return this.estadoForm.get('img') as FormArray;
  }

  get gastronomiaArray(): FormArray {
    return this.estadoForm.get('gastronomia') as FormArray;
  }

  addImg() {
    this.imgArray.push(this.addImgGroup());
  }

  addGastronomia() {
    this.gastronomiaArray.push(this.addGastronomiaGroup());
  }

  removeImg(index) {
    this.imgArray.removeAt(index);
  }

  removeGastronomia(index) {
    this.gastronomiaArray.removeAt(index);
  }

  submitHandler() {
    console.log(this.estadoForm.value);
  }

  addPost() {

    const mov = {
      nombre: this.estadoForm.value.nombre,
      imagen: this.estadoForm.value.imagen,
      cultura: this.estadoForm.value.cultura,
      inicio: this.estadoForm.value.inicio,
      img: this.estadoForm.value.img,
      gastronomia: this.estadoForm.value.gastronomia,
    }


    this.estadoService.updateEstado(mov, this.estado.id);
  }
}
