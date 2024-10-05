import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorLandingComponent } from './collector-landing.component';

describe('CollectorLandingComponent', () => {
  let component: CollectorLandingComponent;
  let fixture: ComponentFixture<CollectorLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorLandingComponent]
    });
    fixture = TestBed.createComponent(CollectorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
