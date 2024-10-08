import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeGetComponent } from './badge-get.component';

describe('BadgeGetComponent', () => {
  let component: BadgeGetComponent;
  let fixture: ComponentFixture<BadgeGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeGetComponent]
    });
    fixture = TestBed.createComponent(BadgeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
