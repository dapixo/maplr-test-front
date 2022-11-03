import { Component, Input, OnInit } from '@angular/core';
import { CatalogueItem } from 'src/app/models/catalogueItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss'],
})
export class MarketItemComponent implements OnInit {
  @Input() product: CatalogueItem;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addProduct(productId: string) {
    this.cartService.createOrUpdate(productId).subscribe(() => {
      this.cartService.openCartDialog();
    });
  }
}
