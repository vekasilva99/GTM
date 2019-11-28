import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {AgregarService} from '../Services/agregar.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import {estado} from '../estados/estado';
import { tipoDestino } from '../destino/tipoDestino';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modificar-tipo-destino',
  templateUrl: './modificar-tipo-destino.component.html',
  styleUrls: ['./modificar-tipo-destino.component.scss']
})
export class ModificarTipoDestinoComponent implements OnInit {
  tipoDestinoForm: FormGroup;
  tipoDestino: tipoDestino = null;
  editDestinyType: tipoDestino;
  constructor(private route: ActivatedRoute, private location: Location, private fb: FormBuilder, public agregarService: AgregarService, private tipoDestinoService: TipoDestinoService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const tipoDestinoId = params.get('id');
      if (tipoDestinoId) {
        this.getTipoDestino(tipoDestinoId);
      }
    });
    this.tipoDestinoForm = this.fb.group({
      nombre: [null, Validators.required],
      // info: [null, Validators.required],
      // imagen: [null, Validators.required],
    });
  }

  getTipoDestino(id: string): void {

    this.tipoDestinoService.getTipoDestino(id).subscribe(array => {

      const tipoDes: tipoDestino = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        // imagen: array.payload.get('imagen'),
        // info: array.payload.get('info'),
      }
      this.editTipoDestino(tipoDes);
      this.tipoDestino = tipoDes;


    });

  }

  editTipoDestino(tipoDestino: tipoDestino) {
    this.editDestinyType = tipoDestino;
    this.tipoDestinoForm.patchValue({
      nombre: tipoDestino.nombre,
      // imagen: tipoDestino.imagen,
      // info: tipoDestino.info,
    });
   
    
  }

  addPost() {

    const mov = {
      nombre: this.tipoDestinoForm.value.nombre ,
      // imagen:this.tipoDestinoForm.value.imagen,
      // info:this.tipoDestinoForm.value.info
  
    }


    this.tipoDestinoService.updateTipoDestino(mov, this.tipoDestino.id);
  }

}
