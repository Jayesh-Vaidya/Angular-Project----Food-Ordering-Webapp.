import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerUpdateItemComponent } from './partner-update-item.component';

describe('PartnerUpdateItemComponent', () => {
  let component: PartnerUpdateItemComponent;
  let fixture: ComponentFixture<PartnerUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerUpdateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
