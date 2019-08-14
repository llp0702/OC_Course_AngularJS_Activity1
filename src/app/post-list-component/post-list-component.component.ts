import { Component, Input, OnInit } from '@angular/core';
import {PostComponent} from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() listItems: Array<PostComponent>;

  constructor() { }

  ngOnInit() {
  }

}
