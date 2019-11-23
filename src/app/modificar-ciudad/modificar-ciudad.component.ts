import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CiudadService } from '../Services/ciudad.service';
import { ciudad } from '../ciudad/ciudad';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-modificar-ciudad',
  templateUrl: './modificar-ciudad.component.html',
  styleUrls: ['./modificar-ciudad.component.scss']
})
export class ModificarCiudadComponent implements OnInit {
ciudad:ciudad=null;
ciudadForm: FormGroup;
  constructor(private route: ActivatedRoute, private location: Location, private ciudadService: CiudadService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ciudadService.getCiudadSeleccionada(id).subscribe(x => {

      const ci: ciudad = {
        id: x.payload.id,
        nombre: x.payload.get('nombre'),
        estadoId: x.payload.get('estadoId'),
        imagen: x.payload.get('imagen'),
      }

      this.ciudad= ci;
     
      
    });

    
    // this.ciudadForm.patchValue({
    //   nombre:"hola",
    //   imagen: "hola",
    //   estadoId: "this.ciudad.estadoId",


    // });

    
    
  }

  getCiudad(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ciudadService.getCiudadSeleccionada(id).subscribe(x => {

      const ci: ciudad = {
        id: x.payload.id,
        nombre: x.payload.get('nombre'),
        estadoId: x.payload.get('estadoId'),
        imagen: x.payload.get('imagen'),
      }

      this.ciudad = ci;
     
      
    });



    



  }

}
