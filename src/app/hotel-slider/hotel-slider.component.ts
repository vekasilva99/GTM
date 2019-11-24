import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Hotel } from '../class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-hotel-slider',
    templateUrl: './hotel-slider.component.html',
    styleUrls: ['./hotel-slider.component.scss']
})
export class HotelSliderComponent implements OnInit {
    h: Hotel = null;
    constructor(private hotelService: HotelService) { }

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    @Input() hotel: Hotel;
    ngOnInit(): void {
        this.getHotel(this.hotel.id);


        this.galleryOptions = [
            {
                width: '100%',
                height: '80vh',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: this.hotel.hotelPictures[0].path,
                medium: this.hotel.hotelPictures[0].path,
                big: this.hotel.hotelPictures[0].path,

            },
            {
                small: this.hotel.hotelPictures[1].path,
                medium: this.hotel.hotelPictures[1].path,
                big: this.hotel.hotelPictures[1].path,

            },
            {
                small: this.hotel.hotelPictures[2].path,
                medium: this.hotel.hotelPictures[2].path,
                big: this.hotel.hotelPictures[2].path,

            },
            {
                small: this.hotel.hotelPictures[3].path,
                medium: this.hotel.hotelPictures[3].path,
                big: this.hotel.hotelPictures[3].path,

            },
        ];
    }


    getHotel(id: string): void {

        this.hotelService.getHotel2(id).subscribe(array => {

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

            this.h = hotel;

        });

    }
}
