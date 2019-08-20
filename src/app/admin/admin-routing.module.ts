
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: '',
      children: [
        { path: 'blogs', component: AdminBlogsComponent },
        { path: 'categories', component: AdminCategoriesComponent },
        { path: 'pages', component: AdminPagesComponent },
        { path: '', component: AdminDashboardComponent }
      ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
