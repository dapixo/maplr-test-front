import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OrderLine } from '../models/orderLine';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  post(orderLines: OrderLine[]) {
    return this.http.post<OrderLine[]>(
      `${environment.apiUrl}/order`,
      orderLines
    );
  }
}
