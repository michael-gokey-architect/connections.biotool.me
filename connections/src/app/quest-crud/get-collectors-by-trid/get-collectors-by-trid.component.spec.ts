import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCollectorsByTridComponent } from './get-collectors-by-trid.component';

describe('GetCollectorsByTridComponent', () => {
  let component: GetCollectorsByTridComponent;
  let fixture: ComponentFixture<GetCollectorsByTridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCollectorsByTridComponent]
    });
    fixture = TestBed.createComponent(GetCollectorsByTridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
