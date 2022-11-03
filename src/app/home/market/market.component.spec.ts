import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  catalogueItemsDarkMock,
  catalogueItemsMock,
} from 'src/app/mock/catalogueItemsMock';
import { ProductServiceMock } from 'src/app/mock/productServiceMock';
import { ProductService } from 'src/app/services/product.service';

import { MarketComponent } from './market.component';

describe('MarketComponent', () => {
  let component: MarketComponent;
  let fixture: ComponentFixture<MarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{ provide: ProductService, useValue: ProductServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all product', () => {
    component.getProducts();
    fixture.detectChanges();
    expect(component.catalogueItems).toEqual(catalogueItemsMock);
  });

  it('should get Dark products', () => {
    let spy = spyOn(component, 'addTypeParams');
    component.onFilter({ type: 'Dark' });
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.catalogueItems).toEqual(catalogueItemsDarkMock);
  });

  it('should clear the filter', () => {
    let spy = spyOn(component, 'getProducts');
    fixture.detectChanges();
    component.onClearFilter();
    expect(spy).toHaveBeenCalled();
    expect(component.catalogueItems).toEqual(catalogueItemsMock);
  });
});
