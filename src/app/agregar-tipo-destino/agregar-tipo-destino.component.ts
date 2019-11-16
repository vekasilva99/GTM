import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {AgregarService} from '../Services/agregar.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import {estado} from '../estados/estado';
import { tipoDestino } from '../destino/tipoDestino';


@Component({
  selector: 'app-agregar-tipo-destino',
  templateUrl: './agregar-tipo-destino.component.html',
  styleUrls: ['./agregar-tipo-destino.component.scss']
})
export class AgregarTipoDestinoComponent implements OnInit {
  tipoDestino: tipoDestino[];
  tipoDestinoForm: FormGroup;
  constructor(private fb: FormBuilder, public agregarService: AgregarService, private tipoDestinoService: TipoDestinoService) { }

  ngOnInit() {
    this.tipoDestinoForm = this.fb.group({
      nombre: [null, Validators.required],
      info: [null, Validators.required],
      imagen: [null, Validators.required],
    });

  }

  addPost() {

    const mov = {
      nombre: this.tipoDestinoForm.value.nombre ,
  
    }

    console.log(this.tipoDestinoForm.value);

    this.tipoDestinoService.addTipoDestino(mov);
  }
}



