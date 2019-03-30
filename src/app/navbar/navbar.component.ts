import { Component, OnInit, HostListener, Inject  } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	goUpHide: boolean = true;

	constructor(@Inject(DOCUMENT) private document: Document) { }
	
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

	@HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 850) {
			this.goUpHide = false;
    } else if (!this.goUpHide && number < 850) {
      this.goUpHide = true;
    }
  }

	scrollTop() {
 		let scrollToTop = window.setInterval(() => {
			let pos = window.pageYOffset;
			if (pos > 0) {
					window.scrollTo(0, pos - 40); // how far to scroll on each step
			} else {
					window.clearInterval(scrollToTop);
			}
		}, 4);
	}
}
