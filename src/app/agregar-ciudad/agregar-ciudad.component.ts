import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {AgregarService} from '../Services/agregar.service';
import { CiudadService } from '../Services/ciudad.service';
import {estado} from '../estados/estado';
import {EstadoService} from '../Services/estado.service';


@Component({
  selector: 'app-agregar-ciudad',
  templateUrl: './agregar-ciudad.component.html',
  styleUrls: ['./agregar-ciudad.component.scss']
})
export class AgregarCiudadComponent implements OnInit {
  estados: estado[];
  ciudadForm: FormGroup;

  constructor(private fb: FormBuilder, public agregarService: AgregarService, private ciudadService: CiudadService, private estadoService: EstadoService) { }

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
    this.ciudadForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      estadoId: [null, Validators.required],

    });

  }


  addPost() {

    const mov = {
      nombre: this.ciudadForm.value.nombre ,
      imagen: this.ciudadForm.value.imagen,
      estadoId: this.ciudadForm.value.estadoId,

    }

    console.log(this.ciudadForm.value);

    this.ciudadService.addCiudad(mov);
  }
}



