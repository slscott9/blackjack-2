import { TestBed } from '@angular/core/testing';

import { ModeUtilityService } from './mode-utility.service';

describe('ModeUtilityService', () => {
  let service: ModeUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
