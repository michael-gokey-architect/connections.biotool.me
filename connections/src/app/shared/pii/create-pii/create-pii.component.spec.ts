import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePiiComponent } from './create-pii.component';

describe('CreatePiiComponent', () => {
  let component: CreatePiiComponent;
  let fixture: ComponentFixture<CreatePiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
