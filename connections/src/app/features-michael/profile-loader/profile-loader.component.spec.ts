import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLoaderComponent } from './profile-loader.component';

describe('ProfileLoaderComponent', () => {
  let component: ProfileLoaderComponent;
  let fixture: ComponentFixture<ProfileLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create, ProfileLoaderComponent', () => {
    expect(component).toBeTruthy();
  });
});
