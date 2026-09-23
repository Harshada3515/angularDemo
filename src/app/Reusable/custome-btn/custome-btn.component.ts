import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custome-btn',
  standalone: true,
  imports: [],
  templateUrl: './custome-btn.component.html',
  styleUrl: './custome-btn.component.css',
})
export class CustomeBtnComponent {
  @Input() type: string = 'submit';
  @Input() btnClass: string = 'btn';
  @Input() btnName: string = 'Submit';
  @Input() isActive: boolean = false;

  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(){
    this.btnClick.emit("child btn click");
  }
}
