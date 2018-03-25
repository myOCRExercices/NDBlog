import { Component, OnInit, Input, InjectionToken, Inject } from '@angular/core';

export const POST_TITLE = new InjectionToken('Post title');
export const POST_CONTENT = new InjectionToken('Post content');
export const POST_LIKE = new InjectionToken('Post love it');

export declare interface IPost {

  Title: string,

  Content: string,

  LoveIts: number,

  Created_at: Date
}

@Component({
  providers: [
    { provide: POST_TITLE, useValue: 'default post title' },
    { provide: POST_CONTENT, useValue: 'default post content' },
    { provide: POST_LIKE, useValue: 'default post like' }
  ]
})
export class Post implements IPost {

  Title: string;

  Content: string;

  LoveIts: number;

  Created_at: Date;

  constructor( @Inject(POST_TITLE) title: string = 'default title name',
              @Inject(POST_CONTENT) content: string = 'default content text',
              @Inject(POST_LIKE) like: number = 0) {
    this.Title = title;
    this.Content = content;
    this.LoveIts = like;
    this.Created_at = new Date();
  }

  decrease() {
    this.LoveIts--;
  }

  increase() {
    this.LoveIts++;
  }
}
