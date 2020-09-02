export interface Location {
  continent?:                         string;
  alpha2?:                            string;
  alpha3?:                            string;
  country_code?:                      string;
  international_prefix?:              string;
  ioc?:                               string;
  gec?:                               string;
  name?:                              string;
  national_destination_code_lengths?: number[];
  national_number_lengths?:           number[];
  national_prefix?:                   string;
  number?:                            string;
  region?:                            string;
  subregion?:                         string;
  world_region?:                      string;
  un_locode?:                         string;
  nationality?:                       string;
  postal_code?:                       boolean;
  unofficial_names?:                  string[];
  languages_official?:                string[];
  languages_spoken?:                  string[];
  geo?:                               Geo;
  currency_code?:                     string;
  start_of_week?:                     string;
}

export interface Geo {
  latitude?:      number;
  latitude_dec?:  string;
  longitude?:     number;
  longitude_dec?: string;
  max_latitude?:  number;
  max_longitude?: number;
  min_latitude?:  number;
  min_longitude?: number;
  bounds?:        Bounds;
}

export interface Bounds {
  northeast?: Northeast;
  southwest?: Northeast;
}

export interface Northeast {
  lat?: number;
  lng?: number;
}
