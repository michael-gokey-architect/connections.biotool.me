import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleLandingComponent } from './role-landing.component';

describe('RoleLandingComponent', () => {
  let component: RoleLandingComponent;
  let fixture: ComponentFixture<RoleLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
