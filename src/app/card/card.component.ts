import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  dataSource!: String;

  @Input()
  imageSource!: String;
  @Input() 
  missionName!: String;
  @Input()
  flightNumber!: String;
  @Input()
  missionIDs!: String;
  @Input()
  launchYear!: String;
  @Input()
  successfulLaunch!: String;
  @Input()
  successfulLanding!: String;

  constructor() { }

  ngOnInit(): void {
  }
}
