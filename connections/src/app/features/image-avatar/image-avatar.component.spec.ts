import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAvatarComponent } from './image-avatar.component';

describe('UserAvatarUploaderComponent', () => {
  let component: ImageAvatarComponent;
  let fixture: ComponentFixture<ImageAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create, ImageAvatarComponent', () => {
    expect(component).toBeTruthy();
  });
});

// TODO: SID
