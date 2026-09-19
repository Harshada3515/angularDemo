import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  student: any = {
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    username: '',
    password: '',
    isAcceptTerms: '',
  };

  signUp() {
    debugger;
    Swal.fire({
      title: 'Form submitted!!!',
      icon: 'success',
      draggable: true,
    });
    console.log(this.student);
  }

  resetForm(studentForm:NgForm){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reset it!',
    }).then((result) => {
      if (result.isConfirmed)

        this.student = {
          fname: '',
          lname: '',
          mobile: '',
          email: '',
          age: '',
          gender: '',
          address: '',
          username: '',
          password: '',
          isAcceptTerms: '',
        };
        studentForm.resetForm(this.student);        
    });
    
  }
}
