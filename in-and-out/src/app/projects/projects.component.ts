import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  dropdownOpen = false;

  dropdownToggle() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
