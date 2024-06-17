import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlueComponent } from './page-blue.component';

describe('PageBlueComponent', () => {
  let component: PageBlueComponent;
  let fixture: ComponentFixture<PageBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
