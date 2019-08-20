import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Routes} from '@angular/router'
import { PlayersService } from 'E:/AngularJS/Project/src/app/service/players.service';

@Component({
  selector: 'app-usersubdetails',
  templateUrl: './usersubdetails.component.html',
  styleUrls: ['./usersubdetails.component.css']
})
export class UsersubdetailsComponent implements OnInit {

  public playersdetail:any;
	constructor(private route:ActivatedRoute,private playerService:PlayersService,private router: Router){}
	ngOnInit(){
    let id = this.route.snapshot.params['id'];
   this.playerService.getUserDetails(id).subscribe((u)=>{
     this.playersdetail=u;
   });

	}

}
