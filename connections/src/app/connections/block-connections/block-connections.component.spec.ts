import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockConnectionsComponent } from './block-connections.component';

describe('BlockConnectionsComponent', () => {
  let component: BlockConnectionsComponent;
  let fixture: ComponentFixture<BlockConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
