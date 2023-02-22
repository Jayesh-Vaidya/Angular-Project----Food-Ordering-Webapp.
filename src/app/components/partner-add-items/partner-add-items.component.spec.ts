import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAddItemsComponent } from './partner-add-items.component';

describe('PartnerAddItemsComponent', () => {
  let component: PartnerAddItemsComponent;
  let fixture: ComponentFixture<PartnerAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
