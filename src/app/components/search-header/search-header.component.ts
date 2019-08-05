import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {

  @Input() iconImg = '';
  @Input() iconUser = '';

  constructor() { }

  ngOnInit() {}

}
