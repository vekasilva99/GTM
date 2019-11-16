import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  name: string = '';
  lastName: string = '';
  cedula: number;
  email: string = '';
  phoneNumber: number;
  direccion: string = '';
  numeroHab: number;
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  minDate: Date;
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'cedula': [null, Validators.required],
      'email': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'direccion': [null, Validators.required],
      'numeroHab': [null, Validators.required],
      date: null,
      range: null


    });
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() );
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    
   }

   addPost(post) {

    const mov = {
      name : post.name,
      lastName:post.lastName,
      cedula:post.cedula,
      email:post.email,
      phoneNumber:post.phoneNumber,
      direccion:post.direccion,
      numeroHab:post.numeroHab,
    }

  }

  ngOnInit() {
  }

}
