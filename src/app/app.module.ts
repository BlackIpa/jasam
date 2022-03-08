import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from'@agm/core';
import { MatCheckboxModule } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
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
import { HubComponent } from './hub/hub.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiService } from './api.service';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';


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
    TeamComponent,
    HubComponent,
    NotFoundComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		MatCheckboxModule,
		NgxGalleryModule,
		AgmCoreModule.forRoot({
			apiKey: "xxx"
		}),
		BsDropdownModule.forRoot()
  ],
  providers: [InformationService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
