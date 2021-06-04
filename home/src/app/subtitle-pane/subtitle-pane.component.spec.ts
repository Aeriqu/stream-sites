import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitlePaneComponent } from './subtitle-pane.component';

describe('SubtitlePaneComponent', () => {
  let component: SubtitlePaneComponent;
  let fixture: ComponentFixture<SubtitlePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitlePaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitlePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
