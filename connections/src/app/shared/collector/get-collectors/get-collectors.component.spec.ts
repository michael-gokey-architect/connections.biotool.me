import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCollectorsComponent } from './get-collectors.component';

describe('GetCollectorsComponent', () => {
  let component: GetCollectorsComponent;
  let fixture: ComponentFixture<GetCollectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCollectorsComponent]
    });
    fixture = TestBed.createComponent(GetCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
