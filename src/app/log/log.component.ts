import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.value);

   

  }

}
