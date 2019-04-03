import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
	galleryOptions: NgxGalleryOptions[];
	galleryImages: NgxGalleryImage[];
	photos: string[];
  constructor() { 
		this.photos = Array(7).fill(0).map((x,i)=>"/../assets/img/hub/hub" + i + ".jpg");
	}

	ngOnInit(): void {
 
		this.galleryOptions = [
				{ width: '800px', height: '600px', thumbnailsColumns: 4, 'imageSize': 'contain' },
				{  breakpoint: 800,	width: '90%', height: '500px',	imagePercent: 80,
					thumbnailsPercent: 20 },
			/* 	{ breakpoint: 800, width: '600px', height: '450px', imagePercent: 80 },*/
				{ breakpoint: 680, width: '500px', height: '415px' }, 
				{ "breakpoint": 530, "width": "400px", "height": "330px" },
				{ "breakpoint": 430, "width": "330px", "height": "270px", preview: false }
				/* { breakpoint: 400, preview: false } */
		];

		this.galleryImages = [
				{
						small: '/../assets/img/hub/hub0.jpg',
						medium: '/../assets/img/hub/hub0.jpg',
						big: '/../assets/img/hub/hub0.jpg'
				},
				{
					small: '/../assets/img/hub/hub1.jpg',
					medium: '/../assets/img/hub/hub1.jpg',
					big: '/../assets/img/hub/hub1.jpg'
				},
				{
					small: '/../assets/img/hub/hub2.jpg',
					medium: '/../assets/img/hub/hub2.jpg',
					big: '/../assets/img/hub/hub2.jpg'
				},
				{
					small: '/../assets/img/hub/hub3.jpg',
					medium: '/../assets/img/hub/hub3.jpg',
					big: '/../assets/img/hub/hub3.jpg'
				},
				{
					small: '/../assets/img/hub/hub4.jpg',
					medium: '/../assets/img/hub/hub4.jpg',
					big: '/../assets/img/hub/hub4.jpg'
				},
				{
					small: '/../assets/img/hub/hub5.jpg',
					medium: '/../assets/img/hub/hub5.jpg',
					big: '/../assets/img/hub/hub5.jpg'
				},
				{
					small: '/../assets/img/hub/hub6.jpg',
					medium: '/../assets/img/hub/hub6.jpg',
					big: '/../assets/img/hub/hub6.jpg'
				}
		];
}

}
