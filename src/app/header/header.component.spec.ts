import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { CartServiceMock } from '../mock/cartServiceMock';
import { CartService } from '../services/cart.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule],
      providers: [
        CartService,
        DialogService,
        { provide: CartService, useValue: CartServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open cart dialog', () => {
    let spy = spyOn(CartServiceMock, 'openCartDialog');
    fixture.detectChanges();
    component.displayCart();
    expect(spy).toHaveBeenCalled();
  });
});
