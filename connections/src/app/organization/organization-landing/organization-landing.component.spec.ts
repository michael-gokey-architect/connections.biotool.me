import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLandingComponent } from './organization-landing.component';

describe('OrganizationLandingComponent', () => {
  let component: OrganizationLandingComponent;
  let fixture: ComponentFixture<OrganizationLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
