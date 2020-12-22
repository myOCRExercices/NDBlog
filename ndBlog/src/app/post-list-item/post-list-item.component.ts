import { Component, OnInit, Input} from '@angular/core';
import { IPost } from '../models/Post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
})
export class PostListItemComponent implements OnInit {

  /**
   * The post item.
  **/
  @Input() PostItem: IPost;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Checks if the post is loved.
  **/
  isLoved() {
    return this.PostItem.LoveIts > 0;
  }

  /**
   * Checks if the post is not loved.
  **/
  isNotLoved() {
    return this.PostItem.LoveIts < 0;
  }

  /**
   * Occurs by decreasing of love.
  **/
  onDecrease() {
    this.postsService.DecreaseLove(this.PostItem);
  }

  /**
   * Occurs by deleting of post.
  **/
  onDeletePost() {
    this.postsService.Remove(this.PostItem);
  }

  /**
   * Occurs by increasing of love.
  **/
  onIncrease() {
    this.postsService.IncreaseLove(this.PostItem);
  }
}
