import { Component, OnInit } from '@angular/core';
import {Category} from 'E:/AngularJS/Project/src/app/blogpost/blogpost/category';
import { BlogpostService } from 'E:/AngularJS/Project/src/app/blogpost/service/blogpost.service';

@Component({
  selector: 'app-blogpost-categories',
  templateUrl: './blogpost-categories.component.html',
  styleUrls: ['./blogpost-categories.component.css']
})
export class BlogpostCategoriesComponent implements OnInit {
  categories: Category;
       error: {};

       constructor(private blogpostService: BlogpostService) { }

       ngOnInit() {
         this.blogpostService.getCategories().subscribe(
           (data: Category) => this.categories = data
         );
       }

}
