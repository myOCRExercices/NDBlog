import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { IPost } from '../models/Post';

@Injectable()
export class PostsService {

  /**
   * list of posts.
  **/
  Posts: IPost[] = [];

  PostsSubject = new Subject<IPost[]>();

  constructor() { }

  /**
   * Adds new post.
  **/
  Add(post: IPost) {
    this.Posts.push(post);
    this.Save();
    this.Emit();
  }

  /**
   * Decreases the number of like for the selected post.
  **/
  DecreaseLove(post: IPost) {
    const postIndexToRemove = this.Posts.findIndex((postEl) => {
      if (postEl === post) {
        postEl.LoveIts--;
        return true;
      }
    });
    this.Save();
    this.Emit();
  }

  /**
   * Emits signal that posts list is updated.
  **/
  Emit() {
    this.PostsSubject.next(this.Posts);
  }

  /**
   * Gets the posts list from database.
  **/
  Get() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.Posts = data.val() ? data.val() : [];
      this.Emit();
    })
  }

  /**
   * Increases the number of like for the selected post.
  **/
  IncreaseLove(post: IPost) {
    const postIndexToRemove = this.Posts.findIndex((postEl) => {
      if (postEl === post) {
        postEl.LoveIts++;
        return true;
      }
    });
    this.Save();
    this.Emit();
  }

  /**
   * Removes and synchronizes the selected post from the database.
  **/
  Remove(post: IPost) {
    const postIndexToRemove = this.Posts.findIndex((postEl) => {
      if (postEl === post) {
        return true;
      }
    });
    this.Posts.splice(postIndexToRemove, 1);
    this.Save();
    this.Emit();
  }

  /**
   * Saves and synchronizes the posts list into the database.
  **/
  Save() {
    firebase.database().ref('/posts').set(this.Posts);
  }

}
