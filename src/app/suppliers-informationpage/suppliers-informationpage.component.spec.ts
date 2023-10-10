import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersInformationpageComponent } from './suppliers-informationpage.component';

describe('SuppliersInformationpageComponent', () => {
  let component: SuppliersInformationpageComponent;
  let fixture: ComponentFixture<SuppliersInformationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersInformationpageComponent]
    });
    fixture = TestBed.createComponent(SuppliersInformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
