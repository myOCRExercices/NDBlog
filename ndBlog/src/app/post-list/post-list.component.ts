import { Component, OnInit, Input } from '@angular/core';
import { IPost, Post } from '../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() PostList: IPost[];

  constructor() { }

  ngOnInit() {
  }

}
