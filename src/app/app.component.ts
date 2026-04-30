import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './featuress/navbar/navbar.component';
import { HeroComponent } from './featuress/hero/hero.component';
import { MainComponent } from './featuress/main/main.component';
import { FooterComponent } from './featuress/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone:true,
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

}
