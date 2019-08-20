import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';

@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, AdminBlogsComponent, AdminCategoriesComponent, AdminPagesComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
