// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-blogpost-featured',
//   templateUrl: './blogpost-featured.component.html',
//   styleUrls: ['./blogpost-featured.component.css']
// })
// export class BlogpostFeaturedComponent implements OnInit {
//
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import { BlogpostService } from 'E:/AngularJS/Project/src/app/blogpost/service/blogpost.service';
import { Blogpost } from 'E:/AngularJS/Project/src/app/blogpost/blogpost';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs: Blogpost;
  error: {};

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.blogpostService.getFeaturedBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }
}
