import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastpaperListComponent } from './pastpaper-list.component';

describe('PastpaperListComponent', () => {
  let component: PastpaperListComponent;
  let fixture: ComponentFixture<PastpaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastpaperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastpaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
