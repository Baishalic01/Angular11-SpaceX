import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  dataSource!: string;

  @Input()
  imageSource!: string;
  @Input() 
  missionName!: string;
  @Input()
  flightNumber!: string;
  @Input()
  missionIDs!: string;
  @Input()
  launchYear!: string;
  @Input()
  successfulLaunch!: string;
  @Input()
  successfulLanding!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
