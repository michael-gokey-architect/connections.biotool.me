import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAliasComponent } from './manage-alias.component';

describe('ManageAliasComponent', () => {
  let component: ManageAliasComponent;
  let fixture: ComponentFixture<ManageAliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAliasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
