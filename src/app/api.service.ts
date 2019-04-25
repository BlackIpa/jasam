import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ApiService {
	url: string = 'http://randompage.pl/assets/php/message.php';
	urlt: string = 'http://localhost:8000/message.php';

	constructor(private http: HttpClient) { }

	sendMessage(messageContent: any) {
		const headers = new HttpHeaders({'Content-Type':  'application/json'});
		return this.http.post(this.url, 
			messageContent, 
			{headers: headers});
	}
}

/* ,
		{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' } */

/* JSON.stringify(messageContent) */