import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePiiComponent } from './delete-pii.component';

describe('DeletePiiComponent', () => {
  let component: DeletePiiComponent;
  let fixture: ComponentFixture<DeletePiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
