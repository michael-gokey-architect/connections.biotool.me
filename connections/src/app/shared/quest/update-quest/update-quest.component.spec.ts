import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestComponent } from './update-quest.component';

describe('UpdateQuestComponent', () => {
  let component: UpdateQuestComponent;
  let fixture: ComponentFixture<UpdateQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
