import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CiudadService } from '../Services/ciudad.service';
import { ciudad } from '../ciudad/ciudad';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EstadoService } from '../Services/estado.service';
import {estado} from '../estados/estado';

@Component({
  selector: 'app-modificar-ciudad',
  templateUrl: './modificar-ciudad.component.html',
  styleUrls: ['./modificar-ciudad.component.scss']
})
export class ModificarCiudadComponent implements OnInit {
  ciudad: ciudad = null;
  ciudadForm: FormGroup;
  editCity: ciudad;
  estados:estado[]=[];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private ciudadService: CiudadService, private estadoService: EstadoService) { }

  ngOnInit() {
    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.estados.push(estado);
      });
    });
    
    this.route.paramMap.subscribe(params => {
      const ciudadId = params.get('id');
      if (ciudadId) {
        this.getCiudad(ciudadId);
      }
    });


    this.ciudadForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      estadoId: [null, Validators.required],

    });

   



  }

  getCiudad(id: string): void {

    this.ciudadService.getCiudadSeleccionada(id).subscribe(x => {

      const ci: ciudad = {
        id: x.payload.id,
        nombre: x.payload.get('nombre'),
        estadoId: x.payload.get('estadoId'),
        imagen: x.payload.get('imagen'),
      }
      this.editCiudad(ci);
      this.ciudad = ci;


    });







  }

  editCiudad(ciudad: ciudad) {
    this.editCity = ciudad;
     this.ciudadForm.patchValue({
      nombre: ciudad.nombre,
      imagen: ciudad.imagen,
      estadoId: ciudad.estadoId,


    });
  }

  addPost(){
    const mov = {
      nombre: this.ciudadForm.value.nombre,
      imagen: this.ciudadForm.value.imagen,
      estadoId: this.ciudadForm.value.estadoId,

    }

 

    this.ciudadService.updateCiudad(mov, this.ciudad.id);
    

  }

}
