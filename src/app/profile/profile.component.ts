import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  public username ='';
  repos:Repos;
  user:User;

  constructor(private profileService:ProfileService,public repositoryService:ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    this.user = this.profileService.user;

    this.repositoryService.getProfileRepo(this.username);
    this.repos = this.repositoryService.repos;
  }

}



