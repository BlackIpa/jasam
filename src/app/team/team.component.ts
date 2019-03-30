import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TEAM } from './team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {
	team = TEAM;
  constructor() { }

  ngOnInit() {
  }

}
