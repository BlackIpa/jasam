import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
	{ path: 'cennik', component: OfferComponent },
	{ path: 'kontakt', component: ContactComponent },
	{ path: 'wspolpraca', component: CooperationComponent },
	{ path: 'zespol', component: TeamComponent },
	{ path: 'centrum', component: TeamComponent },
  { path: ':part', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
