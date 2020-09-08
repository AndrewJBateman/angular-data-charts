import { Page } from './page.module';

export const PAGES: Page[] = [
  {
    title: 'App',
    icon: 'devices',
    content: 'This app was built in Angular v10 with Angular Material Design components/icons. There is a top menu for desktop/tablet screens and a burger icon-activated side menu for phone screens. The RxJS reactive programming library is used to handle datastreams and propagation of change using observables',
    website1: 'Angular',
    link1: 'https://angular.io/',
    website2: 'Angular Material',
    link2: 'https://material.angular.io/'
  },
  {
    title: 'Home',
    icon: 'home',
    content: 'Global data for Covid-19 cases is fetched from a coronatracker API, set in local storage then displayed on a Mat-card. The Apapi API is used to determine the user country and Covid-19 cases are also shown from that country. Global Covid-19 cases are shown on a chart using the angular-google-charts module',
    website1: 'coronatracker API',
    link1: 'https://api.coronatracker.com',
    website2: 'Apapi API',
    link2: 'https://ipapi.co/'
  },
  {
    title: 'Country List',
    icon: 'language',
    content: `Covid data is fetched from local storage and displayed using a Mat-Table of countries. Flags are obtained from the Countryflags API. The numbers from the Covid data are formatted using the Angular number pipe`,
    website1: 'Countryflags API',
    link1: 'https://www.countryflags.io',
    website2: 'Angular number pipe',
    link2: 'https://angular.io/api/common/DecimalPipe#description'
  },
  {
    title: 'News',
    icon: 'article',
    content: `Covid news data is shown on Mat-cards. The Day.js npm module is used to convert the UTC format date into '... ago'. Clicking on a news card will route the user to a news detail page with the JSON data passed using angular router navigation extras.`,
    website1: 'day.js npm module',
    link1: 'https://www.npmjs.com/package/dayjs',
    website2: 'Angular nav extras',
    link2: 'https://angular.io/api/router/NavigationExtras'
  },
  {
    title: 'Charts',
    icon: 'analytics',
    content: `Global Covid case data is displayed by country using the Angular-Google-Charts npm module with thresholds set to limit the data to make the charts more readable. A radio button group allows the user to choose which class of data is displayed; confirmed, recovered or dead`,
    website1: 'Angular Google Charts',
    link1: 'https://www.npmjs.com/package/angular-google-charts'
  }
];
