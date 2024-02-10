import { TestBed } from '@angular/core/testing';

import { CardDeckUtilityService } from './card-deck-utility.service';

describe('CardDeckUtilityService', () => {
  let service: CardDeckUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDeckUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
