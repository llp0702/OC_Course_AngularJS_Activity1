import { Component, Input, OnInit } from '@angular/core';
import {PostComponent} from '../app.component';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: PostComponent;
  constructor() { }

  ngOnInit() {
  }
  getColor() {
    if (this.post.loveIts > 0) {return 'green'; } else {
      if (this.post.loveIts < 0) {return 'red'; } else {
        return 'black';
      }
    }
  }
  increment() {
    this.post.loveIts ++;
  }
  decrement() {
    this.post.loveIts --;
  }
}
