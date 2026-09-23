import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-com-header',
  standalone: true,
  imports: [],
  templateUrl: './com-header.component.html',
  styleUrl: './com-header.component.css'
})
export class ComHeaderComponent {

  @Input() title:string='Title';
  @Input() subtitle:string='Subtitle';

}
