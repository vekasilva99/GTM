import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import { tipoDestino } from '../destino/tipoDestino';
import { moment } from 'ngx-bootstrap/chronos/test/chain';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  rForm: FormGroup;
  tipoDestinos:tipoDestino[]=[];
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  minDate: Date;
  maxDate: Date;
  checkIn:Date;
  checkOut:Date;
  days:number;
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  dateForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private tipoDestinoService:TipoDestinoService) {
    
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
   
    
   }






  

  ngOnInit() {
    this.dateForm = this.fb.group({
      range: null
    });
    this.tipoDestinoService.getOrders().subscribe(array => {
      array.map(item => {
        const tipoDestino: tipoDestino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.tipoDestinos.push(tipoDestino);
      });
    });
  }


  fechaReservacion(){
    this.checkIn=this.dateForm.value.range[0];
    this.checkOut=this.dateForm.value.range[1];
    this.days=(this.checkOut.getTime()-this.checkIn.getTime())/86400000;


  }
  }



