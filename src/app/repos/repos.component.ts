import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileService} from '../services/profile.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [ProfileService]
})
export class ReposComponent implements OnInit {
  repos: Repos;
  constructor(private profileService: ProfileService, public repositoryService: ProfileService) { }
  
  ngOnInit() {
    
  }
  
}


