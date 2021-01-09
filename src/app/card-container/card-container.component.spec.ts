import {TestBed, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { CardContainerComponent } from './card-container.component';
import { ProgramDetailsService } from '../program-details.service';
import { SharedService } from '../shared.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
  
describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;
  let programDetailsService: ProgramDetailsService;
  let year = '2007';
  let launchVal = 'true';
  let landingVal = 'false';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContainerComponent],
      imports: [HttpClientTestingModule,NgxPaginationModule],
      providers: [ ProgramDetailsService, SharedService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    programDetailsService = TestBed.get(ProgramDetailsService);
    // let programDetails: Array<any> = new component.programDetails();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('On init users should be loaded', fakeAsync(() => {
    spyOn(programDetailsService, 'fetchProgramDetails').and.returnValue(of([component.programDetails]).pipe(delay(1)));

    // Trigger ngOnInit()
    fixture.detectChanges();

    expect(component.programDetails).toBeUndefined();
    expect(programDetailsService.fetchProgramDetails).toHaveBeenCalledWith(year, launchVal, landingVal);

    // Simulates the asynchronous passage of time
    tick(1);
    expect(component.programDetails).toEqual([component.programDetails]);
}));
});
