import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { CartLinesMock } from '../mock/cartLinesMock';
import { CartServiceMock } from '../mock/cartServiceMock';
import { CartService } from '../services/cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [HttpClientModule],
      providers: [
        DialogService,
        { provide: CartService, useValue: CartServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cartLines', () => {
    component.getCarLines();
    fixture.detectChanges();
    expect(component.cartLines).toEqual(CartLinesMock);
  });
});
