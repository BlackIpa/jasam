import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AutismService } from '../autism.service';

@Component({
  selector: 'app-autism',
  templateUrl: './autism.component.html',
  styleUrls: ['./autism.component.scss']
})
export class AutismComponent implements OnInit {
  autismPart: { name: string, title: string, text: string, previousLink: string[] };

  constructor(private route: ActivatedRoute, private autismService: AutismService) { }

  ngOnInit() {
    this.autismPart = this.autismService.sendCorrectAutismPart(this.route.snapshot.params['part'])
    this.route.params.subscribe(
      (params: Params) => {
        this.autismPart = this.autismService.sendCorrectAutismPart(params['part']);
      }
    );
  }

 	getCorrectPath(link: String) {
		let path: string;
		path = (link == "autyzm") ? "autyzm" : "autyzm/" + link.toLowerCase();
		console.log(path)
		return path
	}
}
