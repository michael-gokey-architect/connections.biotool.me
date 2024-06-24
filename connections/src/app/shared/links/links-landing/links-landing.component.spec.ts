import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksLandingComponent } from './links-landing.component';

describe('LinksLandingComponent', () => {
  let component: LinksLandingComponent;
  let fixture: ComponentFixture<LinksLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
