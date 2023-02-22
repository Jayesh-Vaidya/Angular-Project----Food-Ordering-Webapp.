import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerItemListComponent } from './partner-item-list.component';

describe('PartnerItemListComponent', () => {
  let component: PartnerItemListComponent;
  let fixture: ComponentFixture<PartnerItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
