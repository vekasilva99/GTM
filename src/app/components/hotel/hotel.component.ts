import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {

  hotels: Hotel[];

  constructor(private h: HotelService) {
    this.hotels = h.hotel;
  }

  filterPost = '';  // Utilizado para que funcione el filtro de busqueda por Nombre.
  filterPost2 = '';

  ngOnInit() {}

}
