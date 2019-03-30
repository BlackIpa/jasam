import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from'@agm/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { InformationService } from './information.service';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { AutismPartComponent } from './home/autism-part/autism-part.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InformationComponent,
    OfferComponent,
    ContactComponent,
    AutismPartComponent,
    CooperationComponent,
    TeamComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: "AIzaSyBmIPPbj1mWRAJWdOLKLEbrBupSUPtzR7Q"
		}),
		BsDropdownModule.forRoot()
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
