import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProgramDetailsService {

  private programdetailsAPI = "https://api.spaceXdata.com/v3/launches?limit=100";
  params: string = '';

  constructor(private http: HttpClient) { }

  public fetchProgramDetails(year: string, launch: string, landing: string) {
    this.params = year + launch + landing;
    return this.http.get(this.programdetailsAPI + this.params);
  }
}
