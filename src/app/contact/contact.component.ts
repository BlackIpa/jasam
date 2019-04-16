import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	latitude = 51.1361514;
	longitude = 17.050906;
	public show:boolean = false;
	isContactPage: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
		this.isContactPage = this.router.url ==='/kontakt' ? true : false;
  }

	toggleConsent() {
		this.show = !this.show;
	}

}
