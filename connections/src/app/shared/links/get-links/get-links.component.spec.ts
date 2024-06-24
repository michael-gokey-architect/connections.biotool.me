import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLinksComponent } from './get-links.component';

describe('GetLinksComponent', () => {
  let component: GetLinksComponent;
  let fixture: ComponentFixture<GetLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
