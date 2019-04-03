import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InformationService } from '../information.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
	styleUrls: ['./information.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class InformationComponent implements OnInit {
  infoPart: { name: string, title: string, icon: string, text: string, 
		previousLink?: string, previousLink2?: string, nextLink?: string };

  constructor(
		private route: ActivatedRoute, 
		private informationService: InformationService,
		private router: Router
		) { }

  ngOnInit() {
		this.infoPart = this.informationService.sendCorrectInfoPart(this.route.snapshot.params['part']);
    this.route.params.subscribe(
      (params: Params) => {
        this.infoPart = this.informationService.sendCorrectInfoPart(params['part']);
      }
		);
		if (this.infoPart == undefined) {
			this.router.navigate(['/not-found'])
		}
	}
	
	getBackground(infoPart: string) {
		if (infoPart == 'czym jest autyzm' || infoPart == 'misja') {
			return 'autism-cover';
		}	else if (infoPart == 'symptomy') {
			return 'symptoms-cover';
		} else {
			return 'diagnosis-cover';
		};
	}

	getBreadcrumbs(infoPart: string) {
		if (infoPart == 'misja') {
			return '/ O NAS / MISJA';
		}	else if (infoPart == 'nasze podejście') {
			return '/ OFERTA / NASZE PODEJŚCIE';
		} else {
			return '/ AUTYZM / ' + infoPart.toUpperCase();
		};
	}

	showHideIcon(infoPart: string) {
		if (infoPart == 'misja' || infoPart == 'nasze podejście')	{
			return 'hidden';
		} else if (infoPart == 'symptomy') {
			return 'symptoms-icon';
		}
	}
}
