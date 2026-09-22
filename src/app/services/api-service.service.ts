import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {

  studentForm!:FormGroup;

  constructor(private http: HttpClient,private fb:FormBuilder) {
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

  
  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
