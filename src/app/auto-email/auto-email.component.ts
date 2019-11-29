import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ItinerarioService } from '../Services/itinerario.service';
import { ReservaService } from '../Services/reserva.service';
import { HotelService } from '../Services/hotel/hotel.service';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { Hotel, Hab } from '../class/hotel/hotel';
import { HabitacionService } from '../Services/habitacion.service';
import { estado } from '../estados/estado';
import { ciudad } from '../ciudad/ciudad';
import { reserva, itinerario } from '../reservar/reserva';


@Component({
  selector: 'app-auto-email',
  templateUrl: './auto-email.component.html',
  styleUrls: ['./auto-email.component.scss']
})
export class AutoEmailComponent implements OnInit {

  title = 'mail';
  emailForm: FormGroup;
  hoteles: Hotel[] = [];
  habs: Hab[] = [];
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  reservas: reserva[] = [];
  reserv: string[]=[];
  itinerario: itinerario = null;
  hab: { hab: string, numH: number }[] = [];
  costo:number=0;
  private documento: AngularFirestoreCollection<any>;

  constructor(private builder: FormBuilder, private asf: AngularFirestore, private itinerarioService: ItinerarioService, private reservaService: ReservaService, private hotelService: HotelService, private estadoService: EstadoService, private ciudadService: CiudadService, private habService: HabitacionService) {
    this.emailForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit() { 
    this.documento=this.asf.collection('correos');
    this.reservaService.getReservasLocal();
    this.reservas = this.reservaService.items;

    this.hotelService.getOrders().subscribe(array => {
      array.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        for (let i = 0; i < this.reservas.length; i++) {
          if (this.reservas[i].hotelId === hotel.id) {
            this.hoteles.push(hotel);
            this.getCiudades(hotel.city);
            this.getEstados(hotel.state);

          }
        }

       
      });
     
      // this.loading = false;
    });
  }

  getEstados(id: string): void {
    this.estadoService.getEstado2(id).subscribe(array => {
      // tslint:disable-next-line: no-shadowed-variable
      const estado: estado = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      };
      this.estados.push(estado);
    });
  }

  getCiudades(id: string): void {
    this.ciudadService.getCiudadSeleccionada(id).subscribe(array => {
      // tslint:disable-next-line: no-shadowed-variable
      const ciudad: ciudad = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        estadoId: array.payload.get('estadoId'),
      };
      this.ciudades.push(ciudad);
    });
  }

  costoTotal(){
    for (let i = 0; i < this.reservas.length; i++) {
    this.costo=this.costo+this.reservas[i].costo;
    
    }

  }

  addUser() {
    this.costoTotal();
    

    for (let i = 0; i < this.reservas.length; i++) {
     const mov={
       hotelId:this.reservas[i].hotelId,
       fechaLlegada:this.reservas[i].fechaLlegada,
       fechaSalida:this.reservas[i].fechaSalida,
       hab:this.reservas[i].hab,
       costo:this.reservas[i].costo,
     }
     this.reservaService.addReserva(mov).then(item=>{
       this.reserv.push(item.id);
     });

    }

    const iti={
      name: this.emailForm.value.name,
      email: this.emailForm.value.email,
      date: this.emailForm.value.date,
      apellido: this.emailForm.value.apellido,
      cedula: this.emailForm.value.cedula,
      direccion: this.emailForm.value.direccion,
      telefono: this.emailForm.value.telefono,
      estatus:'RESERVADO',
      reserva:this.reserv,
      costoTotal:this.costo,
    }

    this.itinerarioService.addItinerario(iti).then(item=>{
      const user = {
        name: this.emailForm.value.name,
        email: this.emailForm.value.email,
        date: this.emailForm.value.date,
        apellido: this.emailForm.value.apellido,
        cedula: this.emailForm.value.cedula,
        direccion: this.emailForm.value.direccion,
        telefono: this.emailForm.value.telefono,
      };
      return this.asf.collection('submissions').add(user);
     
    });
   
  }

  // promesa() {
  //   this.addUser().then(item => {

  //     console.log('Hecho', item.id);

  //     let idNuevo = item.id;

  //     console.log('ahora si', idNuevo);
  //     console.log(this.emailForm);
  //   });
  // }

}