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

  private lastSortIndex: number = 1;

  constructor() { }

  /**
   * Adds new post.
  **/
  Add(post: IPost) {
    this.Posts.push(post);
    this.Save();
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
      this.Sort(this.lastSortIndex);
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
  }

  /**
   * Saves and synchronizes the posts list into the database.
  **/
  Save() {
    firebase.database().ref('/posts').set(this.Posts);
    this.Sort(this.lastSortIndex);
  }

  /**
   * sorts the posts list by index of select.
  **/
  Sort(sortIndex) {
    switch (sortIndex) {
      case "0":
        this.Posts.sort((post1, post2) => {
          return (Date.parse(post1.Created_at) < Date.parse(post2.Created_at)) ? -1 :
            (Date.parse(post1.Created_at) > Date.parse(post2.Created_at)) ? 1 : 0;
        });
        break;
      case "1":
        this.Posts.sort((post1, post2) => {
          return (Date.parse(post1.Created_at) < Date.parse(post2.Created_at)) ? 1 :
            (Date.parse(post1.Created_at) > Date.parse(post2.Created_at)) ? -1 : 0;
        });
        break;
      case "2":
        this.Posts.sort((post1, post2) => {
          return (post1.LoveIts < post2.LoveIts) ? -1 : (post1.LoveIts > post2.LoveIts) ? 1 : 0;
        });
        break;
      case "3":
        this.Posts.sort((post1, post2) => {
          return (post1.LoveIts < post2.LoveIts) ? 1 : (post1.LoveIts > post2.LoveIts) ? -1 : 0;
        });
        break;
      case "4":
        this.Posts.sort((post1, post2) => {
          return (post1.Title < post2.Title) ? -1 : (post1.Title > post2.Title) ? 1 : 0;
        });
        break;
      case "5":
        this.Posts.sort((post1, post2) => {
          return (post1.Title < post2.Title) ? 1 : (post1.Title > post2.Title) ? -1 : 0;
        });
        break;
      default:
        this.Posts.sort((post1, post2) => {
          return (post1.Title < post2.Title) ? -1 : (post1.Title > post2.Title) ? 1 : 0;
        });
    }
    this.lastSortIndex = sortIndex;
    this.Emit();
  }
}
