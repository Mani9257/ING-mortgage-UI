import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageloanComponent } from './mortgageloan.component';

describe('MortgageloanComponent', () => {
  let component: MortgageloanComponent;
  let fixture: ComponentFixture<MortgageloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
