import { Component, OnInit } from '@angular/core';
import { PRICES } from './prices';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
	prices = PRICES;

  constructor() { }

  ngOnInit() {
  }

}
