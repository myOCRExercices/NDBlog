import { Component, OnInit, Input} from '@angular/core';
import { IPost, Post } from '../../classes/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
})
export class PostListItemComponent implements OnInit {

  @Input() PostItem: IPost;

  constructor() {
    this.PostItem = new Post();
  }

  ngOnInit() {
  }

  isLoved() {
    return this.PostItem.LoveIts > 0;
  }

  isNotLoved() {
    return this.PostItem.LoveIts < 0;
  }
}
