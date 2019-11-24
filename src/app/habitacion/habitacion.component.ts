import { Component, OnInit } from '@angular/core';
import { Hotel, Hab } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss']
})
export class HabitacionComponent implements OnInit {
  hotel: Hotel=null;
  hab: Hab=null;
  constructor(private route: ActivatedRoute , private hotelService: HotelService , private location: Location) { }

  ngOnInit() {
   this.getHotel();
   
   
  }
  // getHotel(): void{
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.hotelService.getHotel2(id).subscribe(Hotel => this.hotel = Hotel);
  // }

  getHotel(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel2(id).subscribe(array =>{
      
      const hotel: Hotel = {
        id: array.payload.id,
        name: array.payload.get('name'),
        imagen: array.payload.get('imagen'),
        stars: array.payload.get('stars'),
        state: array.payload.get('state'),
        length: array.payload.get('length'),
        latitude: array.payload.get('latitud'),
        address: array.payload.get('address'),
        city: array.payload.get('city'),
        fullDay: array.payload.get('fullDay'),
        destino: array.payload.get('destino'),
        services: array.payload.get('services'),
        fullDayPrice: array.payload.get('fullDayPrice'),
        hotelPictures: array.payload.get('hotelPictures'),
        hab: array.payload.get('habs'),
      }
      this.hotel=hotel;
      this.getHab(hotel);
      console.log(this.hotel);


    });
    
  }

  getHab(hotel: Hotel): void{
    const i = +this.route.snapshot.paramMap.get('i');
    this.hab=hotel.hab[i];
    
    
  }
}
