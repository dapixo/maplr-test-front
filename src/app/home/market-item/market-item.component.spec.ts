import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { CartServiceMock } from 'src/app/mock/cartServiceMock';
import { CartService } from 'src/app/services/cart.service';

import { MarketItemComponent } from './market-item.component';

describe('MarketItemComponent', () => {
  let component: MarketItemComponent;
  let fixture: ComponentFixture<MarketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketItemComponent],
      imports: [HttpClientModule],
      providers: [
        CartService,
        DialogService,
        { provide: CartService, useValue: CartServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketItemComponent);
    component = fixture.componentInstance;
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
