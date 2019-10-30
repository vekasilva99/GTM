import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Hotel } from '../class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-hotel-slider',
  templateUrl: './hotel-slider.component.html',
  styleUrls: ['./hotel-slider.component.scss']
})
export class HotelSliderComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  @Input() hotel : Hotel;
  ngOnInit(): void {


    this.galleryOptions = [
        {
            width: '600px',
            height: '400px',
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
            small: this.hotel.hotelPictures[0],
            medium: this.hotel.hotelPictures[0],
            big: this.hotel.hotelPictures[0],

        },
        {
            small: this.hotel.hotelPictures[1],
            medium: this.hotel.hotelPictures[1],
            big: this.hotel.hotelPictures[1],

        },
        {
            small: this.hotel.hotelPictures[2],
            medium: this.hotel.hotelPictures[2],
            big: this.hotel.hotelPictures[2],

        },
        {
            small: this.hotel.hotelPictures[3],
            medium: this.hotel.hotelPictures[3],
            big: this.hotel.hotelPictures[3],

        },
    ];
  }
}
