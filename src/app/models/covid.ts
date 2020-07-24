export interface GlobalCount {
  count: number;
  date: string;
  result: {
    confirmed: number;
    deaths: number;
    recovered: number;
  };
}


export interface CountriesCount {
  countryCode?: string;
  countryName?: string;
  lat?:         number;
  lng?:         number;
  confirmed?:   number;
  deaths?:      number;
  recovered?:   number;
  dateAsOf?:    Date;
}
