import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJourneyComponent } from './get-journey.component';

describe('GetJourneyComponent', () => {
  let component: GetJourneyComponent;
  let fixture: ComponentFixture<GetJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
