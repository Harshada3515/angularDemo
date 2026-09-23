import { Component } from '@angular/core';
import { ComHeaderComponent } from '../../Reusable/com-header/com-header.component';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [ComHeaderComponent],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
states:string[]=['Maharashtra','GOA','Gujrat','UP','MP'];

  students:any=[
    {roll:101,name:'ABC',city:'Sangli',m1:90,m2:80},
    {roll:102,name:'PQR',city:'Kolhapur',m1:92,m2:82},
    {roll:103,name:'LMN',city:'Satara',m1:85,m2:94},
    {roll:104,name:'XYZ',city:'Solapur',m1:80,m2:85}
  ]
}
