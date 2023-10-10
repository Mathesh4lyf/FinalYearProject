import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationpageComponent } from './order-informationpage.component';

describe('OrderInformationpageComponent', () => {
  let component: OrderInformationpageComponent;
  let fixture: ComponentFixture<OrderInformationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInformationpageComponent]
    });
    fixture = TestBed.createComponent(OrderInformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
