import { TestBed } from '@angular/core/testing';
import { ProgramDetailsService } from './program-details.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ProgramDetailsService', () => {
  let service: ProgramDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProgramDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
