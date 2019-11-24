import { Component, OnInit } from '@angular/core';
import { Hotel, Hab } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { estado } from '../estados/estado';
import { ciudad } from '../ciudad/ciudad';
import { CiudadService } from '../Services/ciudad.service';
import { EstadoService } from '../Services/estado.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  
  hotel: Hotel=null;
  estado:estado=null;
  ciudad:ciudad=null;
  
  constructor(private route: ActivatedRoute , private hotelService: HotelService , private location: Location, private ciudadService:CiudadService, private estadoService:EstadoService) { }

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
      this.getEstados(hotel.state);
      this.getCiudades(hotel.city);

    });
    
  }

  getEstados(id: string): void{
   
    this.estadoService.getEstado2(id).subscribe(array =>{
    
      const estado: estado ={
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      }
      
      
      this.estado=estado;
     

      


    });

  }

  getCiudades(id: string): void{
   
    this.ciudadService.getCiudadSeleccionada(id).subscribe(array =>{
    
      const ciudad: ciudad ={
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        estadoId: array.payload.get('estadoId'),
      }
      
      
      this.ciudad=ciudad;
     

      


    });

  }

  

}
