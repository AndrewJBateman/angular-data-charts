import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  isHomeRoute() {
    return this.router.url === "/home";
  }

  isCountriesRoute() {
    return this.router.url === "/covid-countries";
  }

  isNewsRoute() {
    return this.router.url === "/covid-news";
  }

  isAboutRoute() {
    return this.router.url === "/about";
  }

  isContactRoute() {
    return this.router.url === "/contact";
  }

  returnToList() {
    this.location.back();
  }

}
