import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostCategoriesComponent } from './blogpost-categories/blogpost-categories.component';

// const routes: Routes =[
//   {path:'blogpost-detail/:id',component:BlogpostDetailComponent}
// ]

@NgModule({
  declarations: [ BlogpostFeaturedComponent, BlogpostRecentComponent, BlogpostDetailComponent, BlogpostListComponent, BlogpostCategoriesComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports:[BlogpostFeaturedComponent,BlogpostRecentComponent,BlogpostDetailComponent,BlogpostListComponent,BlogpostCategoriesComponent]
})
export class BlogpostModule { }
