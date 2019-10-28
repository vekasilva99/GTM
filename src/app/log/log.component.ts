import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Admin } from  '../admin';
import { AuthService } from  '../Services/auth.service';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  admin: Admin={
    email:'veka@gmail.com',
    password:'123'
  }

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }



get formControls() { return this.loginForm.controls; }

login(){
  
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;

  this.isSubmitted = true;

  if( 
    email !== this.admin.email &&
    password !== this.admin.password) {
   this.router.navigateByUrl('/login');

  } else {
    this.router.navigateByUrl('/adminHome');
  }



}
}
