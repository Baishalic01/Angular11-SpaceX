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
    if (this.selectedIndex !== index) {
      this.yearSelected = '&launch_year=' + year;
      this.toggleLaunchYear = true;
      this.selectedIndex = index;
    } else {
      this.yearSelected = ''
      this.selectedIndex = -1;
      this.toggleLaunchYear = false;
    }
    this.sharedService.sendProgramDetailYear(this.yearSelected);  
  }

  filterDataByLaunch(val:string, index: number) {
    if (this.launchIndex !== index) {
      this.launchSuccess = '&launch_success=' + val.toLowerCase();
      this.toggleLaunch = true;
      this.launchIndex = index;
    } else {
      this.launchSuccess = ''
      this.launchIndex = -1;
      this.toggleLaunch = false;
    }
    this.sharedService.sendProgramDetailLaunch(this.launchSuccess);  

  }

  filterDataByLanding(val:string, index: number) {
    if (this.landingIndex !== index) {
      this.landingSuccess = '&land_success=' + val.toLowerCase();
      this.toggleLanding = true;
      this.landingIndex = index;
    } else {
      this.landingSuccess = ''
      this.landingIndex = -1;
      this.toggleLanding = false;
    }
    this.sharedService.sendProgramDetailLanding(this.landingSuccess);
  }
}
