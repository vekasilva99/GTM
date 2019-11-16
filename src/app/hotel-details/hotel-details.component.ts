import { Component, OnInit } from '@angular/core';
import { Hotel, Hab } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  
  hotel: Hotel;
  
  constructor(private route: ActivatedRoute , private hotelService: HotelService , private location: Location) { }

  ngOnInit() {
    this.getHotel();
    
  }

  getHotel(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id).subscribe(Hotel => this.hotel = Hotel);
    
  }

  

}
