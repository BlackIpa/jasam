import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor() { }
	
  ngOnInit() {
		if (window.innerWidth > 578) {
			window.innerWidth;
			document.getElementById('navbarSupportedContent').removeAttribute('data-toggle');
		}
	}

	hideNavbar() {
		let element = document.getElementsByClassName('navbar-toggler');
		let navColl = document.getElementById('navbarSupportedContent');
		element[0].classList.add('collapsed');
		document.getElementById('nav-icon').classList.add('collapsed');
		navColl.classList.add('collapsed');
		navColl.classList.remove('show');
	}
}
