import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestLandingComponent } from './quest-landing.component';

describe('QuestLandingComponent', () => {
  let component: QuestLandingComponent;
  let fixture: ComponentFixture<QuestLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
