import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestComponent } from './delete-quest.component';

describe('DeleteQuestComponent', () => {
  let component: DeleteQuestComponent;
  let fixture: ComponentFixture<DeleteQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
