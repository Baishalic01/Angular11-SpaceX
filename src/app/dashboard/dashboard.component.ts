import { Component, OnInit } from '@angular/core';
import { ProgramDetailsService } from '../program-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedYearforFilter: String = '';
  filteredData!: Object;

  constructor(private programDetailsService: ProgramDetailsService) { }

  ngOnInit(): void {
  }
}
