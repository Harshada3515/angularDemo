import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { MaskMobilePipe } from '../../pipes/mask-mobile.pipe';
import { InitialPipe } from '../../pipes/initial.pipe';

@Component({
  selector: 'app-pipe-ex',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,
    CurrencyPipe,DatePipe,CommonModule,JsonPipe,PercentPipe
  , NaPipe,MaskMobilePipe,SlicePipe,InitialPipe],
  templateUrl: './pipe-ex.component.html',
  styleUrl: './pipe-ex.component.css'
})
export class PipeExComponent {

  name:string='compcare';
  fname:string="COMPCARE";
  fullName="Compcare Sangli";
  sentance:string="this is our first demo";

  price:number=10000;
  marks:undefined=undefined
  currentDate:Date= new Date();
  // currentDate:Date= new Date("07/23/2020");

  student={
    roll:101,
    name:'ABC',
    city:null
  };

  per:number=0.255478;
  mobileNo:string='9514750077';



}
