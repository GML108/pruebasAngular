import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from '../../featuress/main/main.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MainComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
