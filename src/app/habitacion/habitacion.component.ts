import { Component, OnInit } from '@angular/core';
import { Hotel, Hab } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { HabitacionService } from '../Services/habitacion.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss']
})
export class HabitacionComponent implements OnInit {
  hotel: Hotel=null;
  hab: Hab=null;
  constructor(private route: ActivatedRoute , private hotelService: HotelService , private location: Location, private habService: HabitacionService) { }

  ngOnInit() {
   this.getHab();
   
   
  }
  // getHotel(): void{
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.hotelService.getHotel2(id).subscribe(Hotel => this.hotel = Hotel);
  // }

  getHab(): void{
    const id = this.route.snapshot.paramMap.get('i');
    this.habService.getHab(id).subscribe(array =>{
      
      const hab: Hab = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        nightCost: array.payload.get('nightCost'),
        tipoVista: array.payload.get('tipoVista'),
        maxPersonas: array.payload.get('maxPersonas'),
        habPictures: array.payload.get('habPictures'),
        comodidades: array.payload.get('comodidades'),
        numHab: array.payload.get('numHab'),
        hotel: array.payload.get('hotel'),
        
      }
      this.hab=hab;
      console.log(this.hab);


    });
    
  }


}
