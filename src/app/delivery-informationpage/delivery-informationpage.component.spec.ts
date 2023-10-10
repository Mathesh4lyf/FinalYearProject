import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInformationpageComponent } from './delivery-informationpage.component';

describe('DeliveryInformationpageComponent', () => {
  let component: DeliveryInformationpageComponent;
  let fixture: ComponentFixture<DeliveryInformationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryInformationpageComponent]
    });
    fixture = TestBed.createComponent(DeliveryInformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
