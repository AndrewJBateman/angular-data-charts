import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/common/home/home.component';
import { AboutComponent } from './modules/common/about/about.component';
import { ContactComponent } from './modules/common/contact/contact.component';
import { PageNotFoundComponent } from './modules/common/pagenotfound/pagenotfound.component';
import { CovidCountriesComponent } from './modules/application/covid-countries/covid-countries.component';
import { CovidNewsComponent } from './modules/application/covid-news/covid-news.component';
import { NewsDetailComponent } from './modules/application/covid-news/news-detail/news-detail.component';
import { ChartsComponent } from './modules/application/charts/charts.component';

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
    path: 'covid-news',
    component: CovidNewsComponent
  },
  {
    path: 'news-detail',
    component: NewsDetailComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
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
