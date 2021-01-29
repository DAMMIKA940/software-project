import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadGradeComponent } from './video-upload-grade.component';

describe('VideoUploadGradeComponent', () => {
  let component: VideoUploadGradeComponent;
  let fixture: ComponentFixture<VideoUploadGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUploadGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUploadGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
