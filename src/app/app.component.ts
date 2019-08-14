import { Component } from '@angular/core';
export class PostComponent {
  title: string;
  contenu: string;
  loveIts: number;
  createdAt: Date;
  constructor(title: string , contenu: string , loveIts: number ) {
    this.title = title;
    this.contenu = contenu;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }
}

const cont1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
const cont2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.';
const cont3 = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [new PostComponent('Mon premier post', cont1, 1),
    new PostComponent('Mon deuxième post', cont2, -1),
    new PostComponent('Encore un post', cont3, 0)
  ];
}
