import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierspageComponent } from './supplierspage.component';

describe('SupplierspageComponent', () => {
  let component: SupplierspageComponent;
  let fixture: ComponentFixture<SupplierspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierspageComponent]
    });
    fixture = TestBed.createComponent(SupplierspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
