import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeLandingComponent } from './badge-landing.component';

describe('BadgeLandingComponent', () => {
  let component: BadgeLandingComponent;
  let fixture: ComponentFixture<BadgeLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeLandingComponent]
    });
    fixture = TestBed.createComponent(BadgeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
