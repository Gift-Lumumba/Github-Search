import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;

  constructor(private http:HttpClient) { 
  }

  ngOnInit() {

    interface ApiResponse{
        user:string;
        login:string
        avatar_url:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/Gift-Lumumba?access_token=8807a39b6b4f6bbc6f347275b9885be6e421346e").subscribe(data=>{
        this.user= new User(data.user,data.login,data.avatar_url)
    })
  }

}
