import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/common/home/home.component';
import { AboutComponent } from './modules/common/about/about.component';
import { ContactComponent } from './modules/common/contact/contact.component';
import { PageNotFoundComponent } from './modules/common/pagenotfound/pagenotfound.component';
import { CovidCountriesComponent } from './modules/application/covid/covid-countries/covid-countries.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
  },
	{
		path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'covid-countries',
    component: CovidCountriesComponent
  },
	{
		path: '**',
		redirectTo: '/404',
		pathMatch: 'full'
	},
	{
		path: '404',
		component: PageNotFoundComponent
	}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
