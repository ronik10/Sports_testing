import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlogpostModule } from 'E:/AngularJS/Project/src/app/blogpost/blogpost.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { PlayersService } from 'E:/AngularJS/Project/src/app/service/players.service';
import { UserComponent } from './user/user.component';
import { UsersubdetailsComponent } from './usersubdetails/usersubdetails.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from 'E:/AngularJS/Project/src/app/admin/admin.module';
import { AuthModule } from 'E:/AngularJS/Project/src/app/auth/auth.module';
const route:Routes= [
		{path:'',redirectTo:'home',pathMatch:'full'},
		{path:'home',component:HomeComponent},
		{path:'users',component:UsersComponent},
		{
			path:'user/:id',component:UserComponent,
			children: [
				{path:'usersubdetails',component:UsersubdetailsComponent}
			]
		},
		{path:'about',component:AboutComponent},
		{path:'contacts',component:ContactsComponent},
		{path:'**',redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ContactsComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    UsersubdetailsComponent,
    FooterComponent,
    BannerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
		BlogpostModule,
    AppRoutingModule,
	RouterModule.forRoot(route),
    FormsModule , HttpClientModule,
		AdminModule,AuthModule
  ],
  providers: [PlayersService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
