import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorGetComponent } from './collector-get.component';

describe('CollectorGetComponent', () => {
  let component: CollectorGetComponent;
  let fixture: ComponentFixture<CollectorGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorGetComponent]
    });
    fixture = TestBed.createComponent(CollectorGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
