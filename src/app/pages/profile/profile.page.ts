import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // For testing
  feedImage: any = ['photo1.jpg', 'photo3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
