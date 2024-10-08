import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorCreateComponent } from './collector-create.component';

describe('CollectorCreateComponent', () => {
  let component: CollectorCreateComponent;
  let fixture: ComponentFixture<CollectorCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorCreateComponent]
    });
    fixture = TestBed.createComponent(CollectorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
