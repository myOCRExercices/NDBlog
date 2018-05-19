import { Component, OnInit, Input, InjectionToken, Inject } from '@angular/core';

export declare interface IPost {

  Title: string;

  Content: string;

  LoveIts: number;

  Created_at: string;
}

export class Post implements IPost {

  Title: string;

  Content: string;

  LoveIts: number;

  Created_at: string;

  constructor(title: string, content: string) {
    this.Content = content;
    this.Created_at = new Date().toString();
    this.LoveIts = 0;
    this.Title = title;
  } 
}
