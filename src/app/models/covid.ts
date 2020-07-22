export interface CovidCount {
  count : number,
  date : string,
  result : {
    confirmed : number,
    deaths : number,
    recovered : number
  }
}


export interface Case {
  url: string;
  provinceState?: string;
  countryRegion: string;
  lastUpdate: number;
  lat: number;
  long: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
  admin2?: any;
  fips?: any;
  combinedKey: string;
  iso2: string;
  iso3: string;
}
