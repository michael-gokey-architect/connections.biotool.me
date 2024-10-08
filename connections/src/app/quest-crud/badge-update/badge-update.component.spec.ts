import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeUpdateComponent } from './badge-update.component';

describe('BadgeUpdateComponent', () => {
  let component: BadgeUpdateComponent;
  let fixture: ComponentFixture<BadgeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeUpdateComponent]
    });
    fixture = TestBed.createComponent(BadgeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
