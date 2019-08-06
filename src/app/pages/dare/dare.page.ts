import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dare',
  templateUrl: './dare.page.html',
  styleUrls: ['./dare.page.scss'],
})
export class DarePage implements OnInit {

  feedImage: any = ['banner_dare.png', 'photo1.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
