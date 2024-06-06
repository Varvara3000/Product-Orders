import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProducts } from './categories-products';

describe('CategoriesItemsComponent', () => {
  let component: CategoriesProducts;
  let fixture: ComponentFixture<CategoriesProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
