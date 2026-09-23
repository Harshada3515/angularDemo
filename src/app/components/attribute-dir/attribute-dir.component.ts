import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComHeaderComponent } from '../../Reusable/com-header/com-header.component';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, ComHeaderComponent],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1Class:string='';
  div2Class:string='bg-success'
  isDiv2Active:boolean=true;

  students:any=[
    {roll:101,isActive:true,name:'ABC',city:'Sangli',m1:90,m2:80,per:86},
    {roll:102,isActive:false,name:'PQR',city:'Kolhapur',m1:92,m2:82,per:56},
    {roll:103,isActive:true,name:'LMN',city:'Satara',m1:85,m2:94,per:75},
    {roll:104,isActive:true,name:'XYZ',city:'Solapur',m1:80,m2:85,per:25},
  ]

  addRed(){
    this.div1Class='bg-danger'
  }
  addGreen(){
    this.div1Class='bg-success'
  }

  toggle(){
    this.isDiv2Active=!this.isDiv2Active
    // if(this.div2Class==='bg-success'){
    //   this.div2Class='bg-danger'
    // }
    // else{
    //    this.div2Class='bg-success'
    // }
  }
}
