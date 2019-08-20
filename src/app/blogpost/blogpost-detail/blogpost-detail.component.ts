    import { Component, OnInit } from '@angular/core';
    import { Router, ActivatedRoute, ParamMap} from '@angular/router';
    import { BlogpostService } from 'E:/AngularJS/Project/src/app/blogpost/service/blogpost.service';
    import { Blogpost } from 'E:/AngularJS/Project/src/app/blogpost/blogpost';
    import { Title } from '@angular/platform-browser';
    import { Observable } from 'rxjs';
    import { switchMap } from 'rxjs/operators';

    @Component({
      selector: 'app-blogpost-detail',
      templateUrl: './blogpost-detail.component.html',
      styleUrls: ['./blogpost-detail.component.css']
    })
    export class BlogpostDetailComponent implements OnInit {
        title = 'Blog Details';
      blog$: Observable<Blogpost>;

      constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogpostService: BlogpostService,
        private titleService: Title
        ) { }

      blog:any;
      ngOnInit() {
        this.blog$ = this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
            this.blogpostService.getBlog(+params.get('id'))
          )
        );
    //     let id = this.route.snapshot.params['id'];
    // this.blogpostService.getBlog(id).subscribe((u)=>{
    //   this.blog=u;
    // });

        this.titleService.setTitle('Blog Detail');
      }

    }
