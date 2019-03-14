import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
	styleUrls: ['./information.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class InformationComponent implements OnInit {
  infoPart: { 
		name: string, title: string, icon: string, text: string, 
		previousLink?: string, previousLink2?: string, nextLink?: string };

  constructor(private route: ActivatedRoute, private informationService: InformationService) { }

  ngOnInit() {
		this.infoPart = this.informationService.sendCorrectInfoPart(this.route.snapshot.params['part']);
    this.route.params.subscribe(
      (params: Params) => {
        this.infoPart = this.informationService.sendCorrectInfoPart(params['part']);
      }
		);
	}
	
	getBackground(infoPart) {
		if (infoPart == 'czym jest autyzm' || infoPart == 'misja') {
			return 'autism-cover';
		}	else if (infoPart == 'symptomy') {
			return 'symptoms-cover';
		} else {
			return 'diagnosis-cover';
		};
	}
}
