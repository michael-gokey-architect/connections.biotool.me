import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComOneComponent } from './com-one.component';

describe('ComOneComponent', () => {
  let component: ComOneComponent;
  let fixture: ComponentFixture<ComOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create, ComOneComponent', () => {
    expect(component).toBeTruthy();
  });
});
