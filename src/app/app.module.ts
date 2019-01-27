import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from'@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AutismComponent } from './autism/autism.component';
import { AutismService } from './autism.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AutismComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: "AIzaSyBmIPPbj1mWRAJWdOLKLEbrBupSUPtzR7Q"
		})
  ],
  providers: [AutismService],
  bootstrap: [AppComponent]
})
export class AppModule { }
