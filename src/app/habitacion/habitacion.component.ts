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
  hotel: Hotel;
  hab: Hab;
  constructor(private route: ActivatedRoute , private hotelService: HotelService , private location: Location) { }

  ngOnInit() {
    this.getHotel();
    this.getHab();
  }
  getHotel(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id).subscribe(Hotel => this.hotel = Hotel);
  }

  getHab(): void{
    const i = +this.route.snapshot.paramMap.get('i');
    this.hab=this.hotel.hab[i];
    
  }
}
