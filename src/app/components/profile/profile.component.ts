import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  fname: string;
  lname: string;
  linkedin: string;
  twitter: string;

  constructor() { }

  ngOnInit(): void {
  }

}
