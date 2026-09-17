import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/attribute-dir/attribute-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttributeDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularDemo';
}
