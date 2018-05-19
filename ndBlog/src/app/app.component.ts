import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'NDBlog';
  private author = 'Gladis NDOUAB\'S';
  
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
  }
}
