import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aware',
  templateUrl: './aware.page.html',
  styleUrls: ['./aware.page.scss'],
})
export class AwarePage implements OnInit {

  feedImage: any = ['aware_banner.png', 'photo3.jpg'];
  showSetting = false;

  constructor() { }

  ngOnInit() {
  }

}
