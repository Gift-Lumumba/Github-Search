import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Search } from '../search';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newSearch = new Search('','','',0);
  
  submitUser(name){
    this.profileService.getProfileInfo(name.value);
    this.repositoryService.getProfileRepo(name.value);
  }

  constructor(private profileService:ProfileService,private repositoryService:ProfileService) { }

  ngOnInit() {
  }

}

