import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'E:/AngularJS/Project/src/app/service/players.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  public list:any=[];
	constructor(private playerService:PlayersService){}
	ngOnInit(){
		//this.list = this.playerService.getAllPlayers();
		this.playerService.getAllPlayers().subscribe((data)=>{
			this.list=data;
		});

	}

}
