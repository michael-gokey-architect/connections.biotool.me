import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBadgeComponent } from './delete-badge.component';

describe('DeleteBadgeComponent', () => {
  let component: DeleteBadgeComponent;
  let fixture: ComponentFixture<DeleteBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
