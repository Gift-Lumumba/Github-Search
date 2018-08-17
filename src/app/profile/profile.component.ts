import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
  }

}
