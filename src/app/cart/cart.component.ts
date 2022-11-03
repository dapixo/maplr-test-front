import { Component, OnInit } from '@angular/core';
import { CartLine } from '../models/cartLine';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  cartLines: CartLine[] = [];
  orderValidated = false;

  ngOnInit(): void {
    this.getCarLines();
  }

  getCarLines() {
    this.cartService.getAll().subscribe((result: CartLine[]) => {
      this.cartLines = result;
    });
  }

  removeCartLine(id: string) {
    this.cartService.delete(id).subscribe(() => {
      this.cartLines = this.cartLines.filter((val) => {
        return val.id !== id;
      });
    });
  }

  counter(i: number) {
    return new Array(i);
  }

  updateQty(id: string, newQty: number) {
    this.cartService.patch(id, newQty).subscribe();
  }

  getOrderSum() {
    const sum = this.cartLines.reduce((acc, obj: CartLine) => {
      return acc + obj.qty * obj.product.price;
    }, 0);

    return sum;
  }

  validateOrder() {
    const products = this.cartLines.map((product) => {
      return {
        productId: product.productId,
        qty: product.qty,
      };
    });

    this.orderService.post(products).subscribe(() => {
      this.orderValidated = true;
    });
  }

  trackByFn(index: any) {
    return index;
  }
}
