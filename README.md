# :zap: Angular Data Charts

* This is a world health data monitoring app.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Data Charts](#zap-angular-data-charts)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* **General:** Add translation i18n, add storage for PWA. Chart data from [Corona API](http://api.coronatracker.com) JSON time-series of coronavirus cases (confirmed, deaths and recovered) per country. Detects user location.
* **Home Page:** Cards showing world and country Covid data - using [iPapa API](https://ipapi.co/) to detect user country.
* **Countries Page:** table of countries - added flags where missing
* **News & NewsDetail Pages:** news from user country - add country detect and select menu. Click to go to New Detail Page.
* **Charts Page**pie and column charts using `ng2-google-charts`.

## :camera: Screenshots

![Example screenshot](./img/dashboard.png)
![Example screenshot](./img/screen-sizes.png)

## :signal_strength: Technologies

* [Angular v10](https://angular.io/)
* [Angular Material v10](https://material.angular.io/)
* [Angular Material Icons](https://material.io/resources/icons/?style=baseline)
* [Angular Material theming](https://material.angular.io/guide/theming)
* [Dayjs v1](https://github.com/iamkun/dayjs) to convert Github UTC Timestamp to '... ago'
* [RxJS Library v6](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.
* [Angular Augury Chrome Extension](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) v1 used for debugging.
* [rxaviers: Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)
* [Quicktype to extract typescript model from JSON object](https://app.quicktype.io/)
* [Coronatracker API Document](http://api.coronatracker.com/)
* [Country Flags API](https://www.countryflags.io)
* [iPapa API](https://ipapi.co/) to detect user location etc.

## :floppy_disk: Setup

* Install dependencies by running `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build

## :flashlight: Testing

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* _tbd_

```typescript

```

## :cool: Features

* Separate Material module with all Material modules accessed via Shared module

## :clipboard: Status & To-Do List

* Status: In work
* To-Do: See General Info

## :clap: Inspiration

* [Angular Material 10/9 Tutorial: Build Navigation UI with Toolbar and Side Navigation Menu](https://www.techiediaries.com/angular-material-navigation-toolbar-sidenav/)
* [Angular Material Theme Colors](https://medium.com/@treviergits/angular-material-theme-color-options-7d5968cb7460)
* [ng2-google-charts example](https://www.devrandom.it/software/ng2-google-charts/demo/)
* [Github repo: ng2-google-charts](https://github.com/gmazzamuto/ng2-google-charts/blob/master/src/app/charts-gallery/charts-gallery.component.ts)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
