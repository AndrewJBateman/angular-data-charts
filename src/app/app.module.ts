import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './modules/common/nav/nav.component';
import { SharedModule } from './modules/common/shared/shared.module';
import { HomeComponent } from './modules/common/home/home.component';
import { ContactComponent } from './modules/common/contact/contact.component';
import { AboutComponent } from './modules/common/about/about.component';
import { PageNotFoundComponent } from './modules/common/pagenotfound/pagenotfound.component';
import { HomeCardComponent } from './modules/common/home/home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
