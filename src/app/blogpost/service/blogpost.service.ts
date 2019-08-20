
import { Injectable } from '@angular/core';
import { Blogpost } from 'E:/AngularJS/Project/src/app/blogpost/blogpost';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Category} from 'E:/AngularJS/Project/src/app/blogpost/blogpost/category';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  ServerUrl = 'http://localhost:3000/blog';
//ServerUrl = 'https://jsonplaceholder.typicode.com/photos';
  // ServerUrl = 'http://localhost:3000/players';
  ServerUrl2 ='https://jsonplaceholder.typicode.com/users';
  errorData: {};

  constructor(private http: HttpClient) { }

  getBlogs() {
    // return this.http.get<Blogpost>(this.ServerUrl + 'api/blogs').pipe(
    return this.http.get<Blogpost>(this.ServerUrl ).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedBlogs() {
    // return this.http.get<Blogpost>(this.ServerUrl + 'api/featured_blogs').pipe(
          return this.http.get<Blogpost>(this.ServerUrl ).pipe(
      catchError(this.handleError)
    );
  }
  // getBlog(id: number) {
  //       // return this.http.get<Blogpost>(this.ServerUrl + 'api/blog/' + id)
  //       return this.http.get<Blogpost>(this.ServerUrl + id)
  //       .pipe(
  //         catchError(this.handleError)
  //       );
  //   }
    getBlog(id:number){
   // return this.http.get("http://localhost:3000/players/"+id);
   return this.http.get("http://localhost:3000/blog/"+id);
   // return this.http.get("https://api.myjson.com/bins/1d8h4p/"+id);
   //return this.http.get("https://api.myjson.com/bins/11ec5f"+id);
   //return this.http.get("https://jsonplaceholder.typicode.com/todos"+id);

  }

    getRecentBlogs() {
        return this.http.get<Blogpost>(this.ServerUrl ).pipe(
          catchError(this.handleError)
        );
    }

    getCategories() {
        return this.http.get<Category>(this.ServerUrl ).pipe(
          catchError(this.handleError)
        );
    }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
