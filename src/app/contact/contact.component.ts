import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

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
	// Form data
	formData: any = {
		name: '',
		email: '',
		phone: '',
		message: ''
	}

  constructor(private router: Router, private api: ApiService) {
		 }

  ngOnInit() {
		this.isContactPage = this.router.url ==='/kontakt' ? true : false;
  }

	toggleConsent() {
		this.show = !this.show;
	}

	onSubmit() {
		let toJSON = JSON.stringify(this.formData);
		console.log(toJSON);
		this.api.sendMessage(toJSON)
			.subscribe(
				(response) => console.log("Jest ok!", response),
				(error) => console.log("Błąd!", error)
			);
  }

}
