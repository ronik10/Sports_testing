import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Routes} from '@angular/router'
import { PlayersService } from 'E:/AngularJS/Project/src/app/service/players.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private playerService:PlayersService,private router: Router) { }
  playersdetail:any;
  ngOnInit() {
     let id = this.route.snapshot.params['id'];
    this.playerService.getUserDetails(id).subscribe((u)=>{
      this.playersdetail=u;
    });
}
back(){
  let selectedId = this.playersdetail.id ? this.playersdetail.id: null;
  this.router.navigate(['/users',{id:selectedId}]);
}
Details(){
  this.router.navigate(['usersubdetails',{relativeTo: this.route}]);
}
}
