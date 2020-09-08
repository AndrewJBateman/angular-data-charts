export interface GlobalCount {
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
  totalNewCases: number;
  totalNewDeaths: number;
  totalActiveCases: number;
  totalCasesPerMillionPop: number;
  created: string;
}

// export interface CountryList {
//   countries: CountriesCount[];
// }

export interface CountriesCount {
  countryCode?: string;
  country?: string;
  lat?: number;
  lng?: number;
  totalConfirmed?: number;
  totalDeaths?: number;
  totalRecovered?: number;
  dailyConfirmed?: number;
  dailyDeaths?: number;
  activeCases?: number;
  totalCritical?: number;
  totalConfirmedPerMillionPopulation?: number;
  totalDeathsPerMillionPopulation?: number;
  FR?: string;
  PR?: string;
  lastUpdated?: Date;
}

export interface NewsItems {
  total?: number;
  items?: NewsItem[];
}

export interface NewsItem {
  nid?: number;
  title?: string;
  description?: string;
  content?: string;
  author?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: Date;
  addedOn?: Date;
  siteName?: string;
  language?: string;
  countryCode?: number;
  status?: number;
}
