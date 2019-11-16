import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {AgregarService} from '../Services/agregar.service';
import { EstadoService } from '../Services/estado.service';

@Component({
  selector: 'app-agregar-estado',
  templateUrl: './agregar-estado.component.html',
  styleUrls: ['./agregar-estado.component.scss']
})
export class AgregarEstadoComponent implements OnInit {
  estadoForm: FormGroup;

  constructor(private fb: FormBuilder, public agregarService: AgregarService, private estadoService: EstadoService) { }
 
  ngOnInit() {
    this.estadoForm = this.fb.group({
      nombre: [null, Validators.required],
      // id: [''],
      imagen: [null, Validators.required],
      cultura: [null, Validators.required],
      inicio: [null, Validators.required],
      img: this.fb.array([
        this.addImgGroup()
      ]),
      gastronomia:this.fb.array([
        this.addGastronomiaGroup()
      ]),

    });

  }

  addImgGroup(){
    return this.fb.group({
      imgPath:[null, Validators.required]
    });
  }

  addGastronomiaGroup(){
    return this.fb.group({
      gastronomiaPath:[null, Validators.required]
    });
  }

  get imgArray(): FormArray{
    return this.estadoForm.get('img') as FormArray;
  }

  get gastronomiaArray(): FormArray{
    return this.estadoForm.get('gastronomia') as FormArray;
  }

  addImg(){
    this.imgArray.push(this.addImgGroup());
  }

  addGastronomia(){
    this.gastronomiaArray.push(this.addGastronomiaGroup());
  }

  removeImg(index){
    this.imgArray.removeAt(index);
  }

  removeGastronomia(index){
    this.gastronomiaArray.removeAt(index);
  }

  submitHandler(){
    console.log(this.estadoForm.value);
  }

  addPost() {

    const mov = {
      nombre: this.estadoForm.value.nombre ,
      imagen: this.estadoForm.value.imagen,
      cultura: this.estadoForm.value.cultura,
      inicio: this.estadoForm.value.inicio,
      img: this.estadoForm.value.img,
      gastronomia: this.estadoForm.value.gastronomia,
    }

    console.log(this.estadoForm.value);

    this.estadoService.addEstado(mov);
  }
}
