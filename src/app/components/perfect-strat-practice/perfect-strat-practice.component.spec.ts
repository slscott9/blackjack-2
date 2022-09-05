import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectStratPracticeComponent } from './perfect-strat-practice.component';

describe('PerfectStratPracticeComponent', () => {
  let component: PerfectStratPracticeComponent;
  let fixture: ComponentFixture<PerfectStratPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfectStratPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfectStratPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
