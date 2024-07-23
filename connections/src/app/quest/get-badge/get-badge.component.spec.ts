import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBadgeComponent } from './get-badge.component';

describe('GetBadgeComponent', () => {
  let component: GetBadgeComponent;
  let fixture: ComponentFixture<GetBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
