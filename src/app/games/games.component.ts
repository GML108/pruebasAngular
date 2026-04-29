import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `

<h2>Los juegos de {{ username }}</h2>
<ul>
  @for(game of games; track game.id){
    <li>
      {{game.name}}
    </li>
  }
</ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {

  @Input() username = '';

games= [
  {
    id:2,
    name:'uncharted 4'
  },
  {
    id:2,
    name:'DBZ Warriors'
  },
  {
    id:3,
    name:'Horizon Zero Dawn'
  }
]
}
