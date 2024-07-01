import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestComponent } from './get-quest.component';

describe('GetQuestComponent', () => {
  let component: GetQuestComponent;
  let fixture: ComponentFixture<GetQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
