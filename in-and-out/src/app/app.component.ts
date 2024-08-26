import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'in-and-out';
}
