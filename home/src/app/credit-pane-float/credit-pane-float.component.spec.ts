import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPaneFloatComponent } from './credit-pane-float.component';

describe('CreditPaneFloatComponent', () => {
  let component: CreditPaneFloatComponent;
  let fixture: ComponentFixture<CreditPaneFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditPaneFloatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPaneFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
