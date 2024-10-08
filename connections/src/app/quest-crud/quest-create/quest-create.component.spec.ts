import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCreateComponent } from './quest-create.component';

describe('QuestCreateComponent', () => {
  let component: QuestCreateComponent;
  let fixture: ComponentFixture<QuestCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestCreateComponent]
    });
    fixture = TestBed.createComponent(QuestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
