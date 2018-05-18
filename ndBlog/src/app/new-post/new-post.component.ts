import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post, IPost } from '../models/Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  /**
   * The form of new post.
  **/
  PostForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.PostForm = this.formBuilder.group(
      {
        Title: ['', Validators.required],
        Content: ['', Validators.required]
      }
    );
  }

  /**
   * Occurs by saving posts list.
  **/
  onSavePost() {
    const newPost: IPost = new Post(this.PostForm.get('Title').value, this.PostForm.get('Content').value);
    this.postsService.Add(newPost);
    this.router.navigate(['/posts']);
  }

}
