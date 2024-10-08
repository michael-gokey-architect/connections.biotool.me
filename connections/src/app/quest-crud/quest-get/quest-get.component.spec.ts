import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestGetComponent } from './quest-get.component';

describe('QuestGetComponent', () => {
  let component: QuestGetComponent;
  let fixture: ComponentFixture<QuestGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestGetComponent]
    });
    fixture = TestBed.createComponent(QuestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
