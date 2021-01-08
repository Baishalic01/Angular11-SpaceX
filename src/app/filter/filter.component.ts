import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterByYear: string[] = [];
  yearSelected: string = '';
  selectedIndex!: number;
  booleanArray: string[] = ['True', 'False'];
  launchIndex!: number;
  landingIndex!: number;
  launchSuccess!: string;
  landingSuccess!: string;
  toggleLanding: Boolean = false;
  toggleLaunch: Boolean = false;
  toggleLaunchYear: Boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    for (let i = 2006; i <= 2020; i++) {
      this.filterByYear.push(i.toString());
    }
  }

  filterDataByLaunchYear(year: string, index: number) {
    this.toggleLaunchYear = !this.toggleLaunchYear;
    this.selectedIndex = index;
    if (this.toggleLaunchYear === true) {
      this.yearSelected = '&launch_year=' + year;
    } else {
      this.yearSelected = '';
      this.selectedIndex = -1;
    }
    this.sharedService.sendProgramDetailYear(this.yearSelected);  
  }

  filterDataByLaunch(val:string, index: number) {
    this.toggleLaunch = !this.toggleLaunch;
    this.launchIndex = index;
    if (this.toggleLaunch === true) {
      this.launchSuccess = '&launch_success=' + val.toLowerCase();
    } else {
      this.launchSuccess = '';
      this.launchIndex = -1;
    }
    this.sharedService.sendProgramDetailLaunch(this.launchSuccess);  

  }

  filterDataByLanding(val:string, index: number) {
    this.toggleLanding = !this.toggleLanding;
    this.landingIndex = index;
    if (this.toggleLanding === true) {
      this.landingSuccess = '&land_success=' + val.toLowerCase();
    } else {
      this.landingSuccess = ''
      this.landingIndex = -1;
    }
    this.sharedService.sendProgramDetailLanding(this.landingSuccess);  
  }
}
