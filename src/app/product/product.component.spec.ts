import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { of } from 'rxjs';
import { CartService } from '../services/cart.service';

import { ProductComponent } from './product.component';
import { ActivatedRoute } from '@angular/router';
import { CartServiceMock } from '../mock/cartServiceMock';
import { catalogueItemsMock } from '../mock/catalogueItemsMock';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let mockActivatedRoute = { data: of({ product: catalogueItemsMock }) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        DialogService,
        { provide: CartService, useValue: CartServiceMock },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = catalogueItemsMock[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open cart dialog', () => {
    let spy = spyOn(CartServiceMock, 'openCartDialog');
    fixture.detectChanges();
    component.addProduct('1');
    expect(spy).toHaveBeenCalled();
  });
});
