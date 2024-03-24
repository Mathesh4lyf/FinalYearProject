import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrdersReportComponent } from './get-orders-report.component';

describe('GetOrdersReportComponent', () => {
  let component: GetOrdersReportComponent;
  let fixture: ComponentFixture<GetOrdersReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOrdersReportComponent]
    });
    fixture = TestBed.createComponent(GetOrdersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
