import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramDetailsService {

  private programdetailsAPI = "https://api.spaceXdata.com/v3/launches?limit=100";

  constructor(private http: HttpClient) { }

  public fetchProgramDetails(year: String, launch: String, landing: String) {
    return this.http.get(this.programdetailsAPI + year + launch + landing);
  }
}
