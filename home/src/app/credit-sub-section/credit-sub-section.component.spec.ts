import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSubSectionComponent } from './credit-sub-section.component';

describe('CreditSubSectionComponent', () => {
  let component: CreditSubSectionComponent;
  let fixture: ComponentFixture<CreditSubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditSubSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
