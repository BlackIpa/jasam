import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	latitude = 51.1361514;
	longitude = 17.050906;

  constructor() { }

  ngOnInit() { }
}
