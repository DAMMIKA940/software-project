import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPageGradeComponent } from './video-page-grade.component';

describe('VideoPageGradeComponent', () => {
  let component: VideoPageGradeComponent;
  let fixture: ComponentFixture<VideoPageGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPageGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPageGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
