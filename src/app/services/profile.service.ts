
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { User } from '../user';


@Injectable({
  providedIn:'root'
})
export class ProfileService {
user:User;

constructor(private http:HttpClient) { 
this.user=new User('','','');
  }

getProfileInfo(username){
  interface ApiResponse{
    user:string;
    login:string;
    avatar_url:string;
    
}
const promise =new Promise((resolve,reject)=>{
  this.http.get<ApiResponse>(environment.apiUrl + username + environment.apikey).toPromise().then(response => {
      
      this.user.name=response.user;
      this.user.login=response.login;
      this.user.avatar_url=response.avatar_url;

      resolve()
    },

           
        
        )
    })

    return promise
  
}
}