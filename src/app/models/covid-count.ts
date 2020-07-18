export interface CovidCount {
  count : number,
  date : string,
  result : {
    confirmed : number,
    deaths : number,
    recovered : number
  }
}
