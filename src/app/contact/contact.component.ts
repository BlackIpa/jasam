import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	latitude = 51.1030879;
	longitude = 16.9405748;
	show: boolean = false;
	isContactPage: boolean = false;
	messageSent: boolean = false;

  constructor(private router: Router, private api: ApiService) {
		 }

  ngOnInit() {
		this.isContactPage = this.router.url ==='/kontakt' ? true : false;
  }

	toggleConsent() {
		this.show = !this.show;
	}

	onSubmit(contactForm: NgForm) {
		let toJSON = JSON.stringify(contactForm.value);
		this.api.sendMessage(toJSON)
			.subscribe(
				(response) => console.log("Jest ok!", response),
				(error) => console.log("Błąd!", error)
			);
		contactForm.reset();
		this.messageSent = true;
		setTimeout( () => {
			this.messageSent = false;
		}, 4000);
	}
	goToFB(){
    window.open("https://www.facebook.com/jasam.cta/", "_blank");
	}

}
