import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {

  // studentForm: FormGroup = new FormGroup({
  //   fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //   lname: new FormControl(''),
  //   address: new FormControl(''),
  //   mobile: new FormControl('', [Validators.pattern('[7-9]{1}[0-9]{9}')]),
  //   email: new FormControl(''),
  //   age: new FormControl(''),
  //   gender: new FormControl(''),
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   isAcceptTerms: new FormControl(''),
  // });

  studentForm!:FormGroup;

  // fbb=inject(FormBuilder)

  constructor(private fb:FormBuilder){

    this.studentForm = this.fb.group({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lname: new FormControl(''),
      address: new FormControl(''),
      mobile: new FormControl('', [Validators.pattern('[7-9]{1}[0-9]{9}')]),
      email: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      isAcceptTerms: new FormControl(''),
    });
  }

  signUp() {
    console.log(this.studentForm.value);
  }
  resetForm(){
    this.studentForm.reset();
  }
}
