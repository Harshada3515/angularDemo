import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {

  div1Visible:boolean=true;
  div2Visible:boolean=true;
  num1:string='';
  num2:string='';
  isAccepted:boolean=false;
  city:string='';
  day:string='Friday';

  hide(){
    if(this.div1Visible===true){
      this.div1Visible=false
    }
  }
  show(){
     if(this.div1Visible===false){
      this.div1Visible=true
    }
  }
  toggle(){
    this.div2Visible=!this.div2Visible;
  }
}
