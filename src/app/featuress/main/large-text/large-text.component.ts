import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'main-large-text',
  standalone:true,
  imports: [NgClass],
  templateUrl: './large-text.component.html',
  styleUrl: './large-text.component.css'
})
export class LargeTextComponent {
title=input<string>('');
content=input<string>('');
LgTextClass=input<string>('');

}
