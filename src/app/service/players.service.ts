import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }
  getAllPlayers(){
   //   return [
   // {"id":31,"name":"Debjit Majumder", "position":"Goalkeeper","photo":"assets/debjit.jpg","city":"Kolkata","lastteam":"ATK"},
   // {"id":23, "name":"Shilton Paul", "position":"Goalkeeper","photo":"assets/shiltongk.jpg","city":"Kolkata","lastteam":"Mohun Bagan"},
   // {"id":2, "name":"Fran Morante", "position":"Defender","photo":"assets/fran.jpg","city":"Madrid","lastteam":"Vallereal"},
   // {"id":5, "name":"Sukhdev Singh", "position":"Defender","photo":"assets/sukh.jpg","city":"Punjab","lastteam":"Minerva"},
   // {"id":20, "name":"Ashutosh Mehta", "position":"Defender","photo":"assets/ashu.jpg","city":"Mumbai","lastteam":"ATK"},
   // {"id":3, "name":"Gurjinder Kumar", "position":"Defender","photo":"assets/gur.jpg","city":"Hariana","lastteam":"Mohun Bagan"},
   // {"id":15, "name":"Nongdamba Naorem", "position":"Midfield","photo":"assets/naorem.jpg","city":"Manipur","lastteam":"Arrows"},
   // {"id":12, "name":"Sheikh Faiaz", "position":"Midfield","photo":"assets/sk.jpg","city":"Kolkata","lastteam":"Mohun Bagan"},
   // {"id":26, "name":"Shilton DSilva", "position":"Midfield","photo":"assets/sd.jpg","city":"Mumbai","lastteam":"Mohun Bagan"},
   // {"id":35, "name":"Azharuddin Mallick", "position":"Striker","photo":"assets/azhar.jpg","city":"Kolkata","lastteam":"Mohun Bagan"},
   // {"id":11, "name":"Suhair VP", "position":"Striker","photo":"assets/vp.jpg","city":"Trivandam","lastteam":"Gokulam Kerala"},
   // {"id":10, "name":"Salva Chamorro", "position":"Striker","photo":"assets/salva.jpg","city":"Barcelona","lastteam":"Barcelona"}
   // ];
	 return this.http.get("http://localhost:3000/players");
//     return this.http.get("https://api.myjson.com/bins/11ec5f");

  }
  getUserDetails(id:number){
    return this.http.get("http://localhost:3000/players/"+id);
  // return this.http.get("https://api.myjson.com/bins/11ec5f"+id);
   //return this.http.get("https://jsonplaceholder.typicode.com/todos"+id);

  }
}
