import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  div1Visible:boolean=true;
  div2Visible:boolean=true;
  num1:string='';
  num2:string='';
  isAccepted:boolean=false;
  city:string='';

  states:string[]=['Maharashtra','GOA','Gujrat','UP','MP'];

  students:any=[
    {roll:101,name:'ABC',city:'Sangli',m1:90,m2:80},
    {roll:102,name:'PQR',city:'Kolhapur',m1:92,m2:82},
    {roll:103,name:'LMN',city:'Satara',m1:85,m2:94},
    {roll:104,name:'XYZ',city:'Solapur',m1:80,m2:85}
  ]

  hide(){
    if(this.div1Visible === true){
      this.div1Visible=false;
    }
  }

  show(){
    if(this.div1Visible === false){
      this.div1Visible=true;
    }
  }

  toggle(){
    this.div2Visible = !this.div2Visible;
    // this.div2Visible? this.div2Visible=false:this.div2Visible=true;

    // if(this.div2Visible===true){
    //   this.div2Visible=false;
    // }else{
    //   this.div2Visible=true;
    // }
  }
}
