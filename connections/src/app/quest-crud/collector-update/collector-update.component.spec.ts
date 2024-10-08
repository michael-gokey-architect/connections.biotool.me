import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorUpdateComponent } from './collector-update.component';

describe('CollectorUpdateComponent', () => {
  let component: CollectorUpdateComponent;
  let fixture: ComponentFixture<CollectorUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorUpdateComponent]
    });
    fixture = TestBed.createComponent(CollectorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
