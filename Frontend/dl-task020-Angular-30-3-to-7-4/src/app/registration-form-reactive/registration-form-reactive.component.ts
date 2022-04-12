import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-registration-form-reactive',
  templateUrl: './registration-form-reactive.component.html',
  styleUrls: ['./registration-form-reactive.component.css']
})
export class RegistrationFormReactiveComponent implements OnInit {

  registrationForm: FormGroup;
  submitted:boolean=false;

  constructor( private fb : FormBuilder ) {
    this.registrationForm = this.fb.group ({
      firstName: ['',Validators.required],
      phoneNumber: [
      '',
      [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ],
    ],
     pass: ['',Validators.required],
     cnfpass: ['',Validators.required],
    },{validator:PasswordValidator});
   }

  ngOnInit(): void {
    this.registrationForm.patchValue({
      firstName: 'Test',
      phoneNumber: '1234567899'
    });
  }
  // onSubmit() {
  //   console.log(this.registrationForm.value);
  // }

}
