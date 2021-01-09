import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private yearSubject = new Subject<any>();
  private launchSubject = new Subject<any>();
  private landingSubject = new Subject<any>();

  constructor() { }
  sendProgramDetailYear(year: String) {
    this.yearSubject.next({text: year});
  }
  getProgramDetailYear(): Observable<any> {  
    return this.yearSubject.asObservable();  
  }
  sendProgramDetailLaunch(launch: String) {
    this.launchSubject.next({text: launch});
  }
  getProgramDetailLaunch(): Observable<any> {  
    return this.launchSubject.asObservable();  
  }
  sendProgramDetailLanding(landing: String) {
    this.landingSubject.next({text: landing});
  }
  getProgramDetailLanding(): Observable<any> {  
    return this.landingSubject.asObservable();  
  }
}
