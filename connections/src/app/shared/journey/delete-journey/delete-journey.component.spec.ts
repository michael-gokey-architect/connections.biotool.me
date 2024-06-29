import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJourneyComponent } from './delete-journey.component';

describe('DeleteJourneyComponent', () => {
  let component: DeleteJourneyComponent;
  let fixture: ComponentFixture<DeleteJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
