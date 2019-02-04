import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	burgerStatus: boolean = false;

  constructor() { }

  ngOnInit() {
	}
	
	changeBurgerToX(){
		console.log("Koń");
			this.burgerStatus = !this.burgerStatus;       
	}
}
