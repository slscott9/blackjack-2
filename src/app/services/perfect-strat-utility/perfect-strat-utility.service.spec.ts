import { TestBed } from '@angular/core/testing';

import { PerfectStratUtilityService } from './perfect-strat-utility.service';

describe('PerfectStratUtilityService', () => {
  let service: PerfectStratUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfectStratUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
