import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePiiComponent } from './update-pii.component';

describe('UpdatePiiComponent', () => {
  let component: UpdatePiiComponent;
  let fixture: ComponentFixture<UpdatePiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
