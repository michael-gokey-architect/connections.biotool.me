import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollectorComponent } from './update-collector.component';

describe('UpdateCollectorComponent', () => {
  let component: UpdateCollectorComponent;
  let fixture: ComponentFixture<UpdateCollectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCollectorComponent]
    });
    fixture = TestBed.createComponent(UpdateCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
