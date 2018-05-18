import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPost } from '../models/Post';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  /**
   * The posts list.
  **/
  PostList: IPost[];

  postSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.PostsSubject.subscribe((postsObj: IPost[]) => {
      this.PostList = postsObj;
    });
    this.postsService.Get();
    this.postsService.Emit();
  }
  
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
