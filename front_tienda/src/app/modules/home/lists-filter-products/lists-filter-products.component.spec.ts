import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsFilterProductsComponent } from './lists-filter-products.component';

describe('ListsFilterProductsComponent', () => {
  let component: ListsFilterProductsComponent;
  let fixture: ComponentFixture<ListsFilterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsFilterProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsFilterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
