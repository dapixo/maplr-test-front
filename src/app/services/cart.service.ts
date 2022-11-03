import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CartLine } from '../models/cartLine';
import { DialogService } from 'primeng/dynamicdialog';
import { CartComponent } from '../cart/cart.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient, public dialogService: DialogService) {}

  createOrUpdate(productId: string): Observable<CartLine> {
    return this.http.put<CartLine>(`${environment.apiUrl}/cart`, { productId });
  }

  getAll(): Observable<CartLine[]> {
    return this.http.get<CartLine[]>(`${environment.apiUrl}/cart`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/cart/${id}`);
  }

  patch(id: string, qty: number): Observable<CartLine> {
    return this.http.patch<CartLine>(`${environment.apiUrl}/cart/${id}`, {
      newQty: qty,
    });
  }

  openCartDialog() {
    const ref = this.dialogService.open(CartComponent, {
      header: 'Votre panier',
      width: '500px',
      height: '100%',
      position: 'right',
    });
  }
}
