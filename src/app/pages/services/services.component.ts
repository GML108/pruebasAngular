import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../../featuress/hero/hero.component';
import { MainComponent } from '../../featuress/main/main.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HeroComponent, MainComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
