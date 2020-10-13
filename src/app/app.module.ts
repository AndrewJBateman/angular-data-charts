import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './services/localstorage.service';

import { NavComponent } from './modules/common/nav/nav.component';
import { SharedModule } from './modules/common/shared/shared.module';
import { HomeComponent } from './modules/common/home/home.component';
import { ContactComponent } from './modules/common/contact/contact.component';
import { AboutComponent } from './modules/common/about/about.component';
import { PageNotFoundComponent } from './modules/common/pagenotfound/pagenotfound.component';
import { HomeCardComponent } from './modules/common/home/home-card/home-card.component';
import { CovidCountriesComponent } from './modules/application/covid-countries/covid-countries.component';
import { PipesModule } from './pipes/pipes.module';
import { CovidNewsComponent } from './modules/application/covid-news/covid-news.component';
import { NewsDetailComponent } from './modules/application/covid-news/news-detail/news-detail.component';
import { ChartsComponent } from './modules/application/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeCardComponent,
    CovidCountriesComponent,
    CovidNewsComponent,
    NewsDetailComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    GoogleChartsModule.forRoot({ version: '49' }),
    SharedModule.forRoot(),
    PipesModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
