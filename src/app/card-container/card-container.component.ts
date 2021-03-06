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
  yearSelected: string = '';
  launchVal: string = '';
  landingVal: string = '';
  p: number = 1;
  subscriptions: Subscription[] = [];

  constructor(private programDetailsService: ProgramDetailsService, private sharedService: SharedService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.programDetailsService.fetchProgramDetails(this.yearSelected, this.launchVal, this.landingVal).subscribe((response) => {
      this.programDetails = response;
      this.subscriptionYear = this.sharedService.getProgramDetailYear().subscribe((detail: { text: any; }) => {   
        this.yearSelected = detail.text;  
        this.filteredData(this.yearSelected,this.launchVal,this.landingVal);
      });
      this.subscriptionLaunch = this.sharedService.getProgramDetailLaunch().subscribe((detail: { text: any; }) => {   
        this.launchVal = detail.text;  
        this.filteredData(this.yearSelected,this.launchVal,this.landingVal);
      });
      this.subscriptionLanding = this.sharedService.getProgramDetailLanding().subscribe((detail: { text: any; }) => {   
        this.landingVal = detail.text;
        this.filteredData(this.yearSelected,this.launchVal,this.landingVal);
      });
    });
  }

  filteredData(year: string, launch: string, landing: string ) {
    this.spinner.show();
    this.p = 1;
    this.programDetailsService.fetchProgramDetails(year, launch, landing).subscribe((response) => {
      this.programDetails = response;
      this.spinner.hide();
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
}
}
