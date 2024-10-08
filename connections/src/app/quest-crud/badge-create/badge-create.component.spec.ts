import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCreateComponent } from './badge-create.component';

describe('BadgeCreateComponent', () => {
  let component: BadgeCreateComponent;
  let fixture: ComponentFixture<BadgeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeCreateComponent]
    });
    fixture = TestBed.createComponent(BadgeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
