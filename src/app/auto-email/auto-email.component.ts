import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-auto-email',
  templateUrl: './auto-email.component.html',
  styleUrls: ['./auto-email.component.scss']
})
export class AutoEmailComponent implements OnInit {

  title = 'mail';
  emailForm: FormGroup;

  constructor(private builder: FormBuilder, private asf: AngularFirestore) {
    this.emailForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', ]
    });
  }

  ngOnInit() {}

  addUser() {
    const user = {
      name: this.emailForm.value.name,
      email: this.emailForm.value.email,
      date: this.emailForm.value.date,
    };
    return this.asf.collection('submissions').add(user);
  }

  promesa() {
    this.addUser().then(item => {

      console.log('Hecho', item.id);

      let idNuevo = item.id;

      console.log('ahora si', idNuevo);
      console.log(this.emailForm);
    });
  }

}
