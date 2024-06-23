import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLandingComponent } from './tag-landing.component';

describe('TagLandingComponent', () => {
  let component: TagLandingComponent;
  let fixture: ComponentFixture<TagLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
