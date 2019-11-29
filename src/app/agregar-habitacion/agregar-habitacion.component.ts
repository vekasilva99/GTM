import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ControlContainer } from '@angular/forms';
import { AgregarService } from '../Services/agregar.service';
import { DestinoService } from '../Services/destino.service';
import { estado } from '../estados/estado';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { ciudad } from '../ciudad/ciudad';
import { Hotel, Hab, Mes } from '../class/hotel/hotel';
import { HotelService } from '../Services/hotel/hotel.service';
import { destino } from '../destino/destino';
import { HabitacionService } from '../Services/habitacion.service';
import { DisponibilidadService } from '../Services/disponibilidad.service';

@Component({
  selector: 'app-agregar-habitacion',
  templateUrl: './agregar-habitacion.component.html',
  styleUrls: ['./agregar-habitacion.component.scss']
})
export class AgregarHabitacionComponent implements OnInit {
  hoteles: Hotel[] = [];
  habForm: FormGroup;
  star: number[] = [];
  full: boolean = false;
  loading: boolean;
  selected: string[];
  disp: any[] = [];
  id: string;

  constructor(private fb: FormBuilder, public agregarService: AgregarService, private habService: HabitacionService,
              private hotelService: HotelService, private disponibilidadService: DisponibilidadService) { }

  ngOnInit() {


    this.hotelService.getOrders().subscribe(array => {
      array.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.hoteles.push(hotel);
      });
    });
    console.log(this.hoteles);

    this.habForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      nightCost: [null, Validators.required],
      tipoVista: [null, Validators.required],
      maxPersonas: [null, Validators.required],
      habPictures: this.fb.array([]),
      comodidades: this.fb.array([]),
      numHab: [null, Validators.required],
      hotel: [null, Validators.required],
    });

    this.loading = false;
  }

  addHabPicture() {
    const img = this.fb.group({
      path: [null, Validators.required],
    });

    this.habPicturesArray.push(img);
  }

  get habPicturesArray(): FormArray {
    return this.habForm.get('habPictures') as FormArray;
  }

  removeHabPicture(i: number) {
    this.habPicturesArray.removeAt(i);
  }

  addComodidades() {
    const comodidad = this.fb.group({
      path: [null, Validators.required],
    });

    this.comodidadesArray.push(comodidad);
  }

  get comodidadesArray(): FormArray {
    return this.habForm.get('comodidades') as FormArray;
  }

  removeComodidades(i: number) {
    this.comodidadesArray.removeAt(i);
  }

  addPost() {
    // this.habService.disponibilidad1(this.habForm.value.numHab);
    // this.disp = this.habService.disp;
    this.disponibilidadService.disponibilidad1(this.habForm.value.numHab);

    const d = {
      enero: this.disponibilidadService.disp2.enero,
      febrero: this.disponibilidadService.disp2.febrero,
      marzo: this.disponibilidadService.disp2.marzo,
      abril: this.disponibilidadService.disp2.abril,
      mayo: this.disponibilidadService.disp2.mayo,
      junio: this.disponibilidadService.disp2.junio,
      julio: this.disponibilidadService.disp2.julio,
      agosto: this.disponibilidadService.disp2.agosto,
      septiembre: this.disponibilidadService.disp2.septiembre,
      octubre: this.disponibilidadService.disp2.octubre,
      noviembre: this.disponibilidadService.disp2.noviembre,
      diciembre: this.disponibilidadService.disp2.diciembre,
    }

    this.disponibilidadService.addDisponibilidad(d).then(item => {
      this.id = item.id;
      const mov = {
        nombre: this.habForm.value.nombre,
        imagen: this.habForm.value.imagen,
        nightCost: this.habForm.value.nightCost,
        tipoVista: this.habForm.value.tipoVista,
        maxPersonas: this.habForm.value.maxPersonas,
        habPictures: this.habForm.value.habPictures,
        comodidades: this.habForm.value.comodidades,
        numHab: this.habForm.value.numHab,
        hotel: this.habForm.value.hotel,
        disponibilidad: item.id,
      };

      this.habService.addHab(mov);
     
      
      const u = {
        enero: this.disponibilidadService.disp2.enero,
        febrero: this.disponibilidadService.disp2.febrero,
        marzo: this.disponibilidadService.disp2.marzo,
        abril: this.disponibilidadService.disp2.abril,
        mayo: this.disponibilidadService.disp2.mayo,
        junio: this.disponibilidadService.disp2.junio,
        julio: this.disponibilidadService.disp2.julio,
        agosto: this.disponibilidadService.disp2.agosto,
        septiembre: this.disponibilidadService.disp2.septiembre,
        octubre: this.disponibilidadService.disp2.octubre,
        noviembre: this.disponibilidadService.disp2.noviembre,
        diciembre: this.disponibilidadService.disp2.diciembre,
      }
      this.disponibilidadService.updateDisponibilidad(u, item.id);
    });
  }
}
