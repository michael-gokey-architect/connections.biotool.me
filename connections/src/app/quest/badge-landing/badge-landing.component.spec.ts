import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeLandingComponent } from './badge-landing.component';

describe('BadgeLandingComponent', () => {
  let component: BadgeLandingComponent;
  let fixture: ComponentFixture<BadgeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
