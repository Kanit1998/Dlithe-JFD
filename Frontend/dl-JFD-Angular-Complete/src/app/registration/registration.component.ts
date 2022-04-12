import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  listOfCity = ['mandi', 'rewalsar','nerchowk'];

  registrationModel ={
    firstname: '',
    number:'8936475634',
    email:'lkshad',
    DateOFBirth: '18-08-1998',
    adress:'syusa',
    city: 'mandi',
    pincode: '572100'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
