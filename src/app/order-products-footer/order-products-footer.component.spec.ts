import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductsFooterComponent } from './order-products-footer.component';

describe('OrderProductsFooterComponent', () => {
  let component: OrderProductsFooterComponent;
  let fixture: ComponentFixture<OrderProductsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderProductsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderProductsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
