import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data by launch year when different year selected', () => {
    let year = "2006";
    let index = 1;
    component.selectedIndex = 0;
    component.filterDataByLaunchYear(year, index);
    expect (component.selectedIndex).toEqual(index);
  });

  it('should filter data by launch year when same year is selected', () => {
    let year = "2006";
    let index = 0;
    component.selectedIndex = 0;
    component.filterDataByLaunchYear(year, index);
    expect (component.selectedIndex).toEqual(-1);
  });

  it('should filter data by launch boolean value when different val selected', () => {
    let val = 'true';
    let index = 1;
    component.launchIndex = 0;
    component.filterDataByLaunch(val, index);
    expect (component.launchIndex).toEqual(index);
  });

  it('should filter data by launch boolean value when same val selected', () => {
    let val = 'true';
    let index = 0;
    component.launchIndex = 0;
    component.filterDataByLaunch(val, index);
    expect (component.launchIndex).toEqual(-1);
  });

  it('should filter data by landing boolean value  when different val selected', () => {
    let val = 'false';
    let index = 2;
    component.landingIndex = 0;
    component.filterDataByLanding(val, index);
    expect (component.landingIndex).toEqual(index);
  });

  it('should filter data by landing boolean value  when same val selected', () => {
    let val = 'false';
    let index = 0;
    component.landingIndex = 0;
    component.filterDataByLanding(val, index);
    expect (component.landingIndex).toEqual(-1);
  })
});
