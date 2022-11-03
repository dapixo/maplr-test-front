import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CatalogueItem } from '../models/catalogueItem';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  get(): Observable<CatalogueItem[]> {
    return this.http.get<CatalogueItem[]>(`${environment.apiUrl}/product`)
  }

  getById(id: string): Observable<CatalogueItem> {
    return this.http.get<CatalogueItem>(`${environment.apiUrl}/product/${id}`)
  }

  getByType(type: string): Observable<CatalogueItem[]> {
    return this.http.get<CatalogueItem[]>(`${environment.apiUrl}/product?type=${type}`)
  }

}
