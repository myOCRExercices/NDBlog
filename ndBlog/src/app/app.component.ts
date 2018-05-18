import { Component } from '@angular/core';
import { IPost, Post } from '../classes/Post';
import * as firebase from 'firebase';

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
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAG0gRlgq-qzgptN1BVnzlqAD8R8Phts8w",
      authDomain: "ndblog-71376.firebaseapp.com",
      databaseURL: "https://ndblog-71376.firebaseio.com",
      projectId: "ndblog-71376",
      storageBucket: "ndblog-71376.appspot.com",
      messagingSenderId: "603608532478"
    };
    firebase.initializeApp(config);

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
