import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFooterComponent } from './categories-footer.component';

describe('CategoriesFooterComponent', () => {
  let component: CategoriesFooterComponent;
  let fixture: ComponentFixture<CategoriesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
