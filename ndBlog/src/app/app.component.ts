import { Component } from '@angular/core';
import { IPost, Post } from '../classes/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'NDBlog';
  private author = 'Gladis NDOUAB\'S';
  Posts: IPost[];

  constructor() {
    this.Posts = [
      new Post('Angular',
        'Angular (commonly referred to as "Angular 5" or "Angular 2") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
        5),
      new Post('First blog', 'test first content', 2),
      new Post('Second blog', 'test second content', -1),
      new Post('Third blog', 'test third content')
    ];
  }
}
