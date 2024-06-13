import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPublicLandingComponent } from './guest-public-landing.component';

describe('GuestPublicLandingComponent', () => {
  let component: GuestPublicLandingComponent;
  let fixture: ComponentFixture<GuestPublicLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPublicLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestPublicLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
