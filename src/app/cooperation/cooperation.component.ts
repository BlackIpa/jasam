import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { STEPS } from './steps';

@Component({
  selector: 'app-cooperation',
  templateUrl: './cooperation.component.html',
	styleUrls: ['./cooperation.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CooperationComponent implements OnInit {
	steps = STEPS;

  constructor() { }

  ngOnInit() {
  }

}
