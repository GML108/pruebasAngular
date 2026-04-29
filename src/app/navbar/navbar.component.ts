import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

dropdown:string | null=null;

  desplegable(menu : string) {

    if(this.dropdown==menu){
  this.dropdown = null;
    }
    else{
    this.dropdown = menu;
  }
}
}


