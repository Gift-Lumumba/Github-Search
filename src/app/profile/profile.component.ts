import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  public username ='Gift-Lumumba';
  user:User;

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    this.user = this.profileService.user;
  }

}
