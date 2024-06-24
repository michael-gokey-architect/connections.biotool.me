import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiLandingComponent } from './pii-landing.component';

describe('PiiLandingComponent', () => {
  let component: PiiLandingComponent;
  let fixture: ComponentFixture<PiiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiiLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
