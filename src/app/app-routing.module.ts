import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutismComponent } from './autism/autism.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'autyzm', component: AutismComponent },
  { path: 'autyzm/:part', component: AutismComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
