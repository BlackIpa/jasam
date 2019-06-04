import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ApiService {
	url: string = 'http://ja-sam.pl/assets/php/message.php';

	constructor(private http: HttpClient) { }

	sendMessage(messageContent: any) {
		const headers = new HttpHeaders({'Content-Type':  'application/json'});
		return this.http.post(this.url, 
			messageContent, 
			{headers: headers});
	}
}