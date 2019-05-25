import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TravelComponent } from './travel/travel.component';
import { WritingsComponent } from './writings/writings.component';

const routes: Routes = [
{
path: '',
redirectTo: '/home',
pathMatch: 'full'
},
{
path:  'home',
component:  HomeComponent
},
{
path:  'about',
component:  AboutComponent
},
{
path:  'travel',
component:  TravelComponent
},
{
path:  'writings',
component:  WritingsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
