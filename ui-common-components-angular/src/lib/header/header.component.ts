import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input("data") topic: any;

  ngOnInit(): void {
  }

}
