import { Component, OnInit, Input } from '@angular/core';
import { ProgramDetailsService } from '../program-details.service';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  programDetails!: any;
  subscriptionYear: Subscription = new Subscription;
  subscriptionLaunch: Subscription = new Subscription;
  subscriptionLanding: Subscription = new Subscription;
  yearSelected: String = '';
  launchVal: String = '';
  landingVal: String = '';
  p: number = 1;

  constructor(private programDetailsService: ProgramDetailsService, private sharedService: SharedService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.programDetailsService.fetchProgramDetails(this.yearSelected, this.launchVal, this.landingVal).subscribe((response) => {
      this.programDetails = response;
      this.subscriptionYear = this.sharedService.getProgramDetailYear().subscribe((detail: { text: any; }) => {   
        this.yearSelected = detail.text;  
        console.log('year:  ' + this.yearSelected);
        console.log('launch:  ' + this.launchVal);
        console.log('landing:  ' + this.landingVal);
        this.filteredData(this.yearSelected,this.launchVal,this.landingVal);
      });
      this.subscriptionLaunch = this.sharedService.getProgramDetailLaunch().subscribe((detail: { text: any; }) => {   
        this.launchVal = detail.text;  
        console.log('year:  ' + this.yearSelected);
        console.log('launch:  ' + this.launchVal);
        console.log('landing:  ' + this.landingVal);
        this.filteredData(this.yearSelected,this.launchVal,this.landingVal);
      });
      this.subscriptionLanding = this.sharedService.getProgramDetailLanding().subscribe((detail: { text: any; }) => {   
        this.landingVal = detail.text;
        console.log('year:  ' + this.yearSelected);
        console.log('launch:  ' + this.launchVal);
        console.log('landing:  ' + this.landingVal);
        this.filteredData(this.yearSelected,this.launchVal,this.landingVal);
      });
    });
  }

  filteredData(year: String, launch: String, landing: String ) {
    this.spinner.show();
    this.programDetailsService.fetchProgramDetails(year, launch, landing).subscribe((response) => {
      this.programDetails = response;
      this.spinner.hide();
    })
  }

}
