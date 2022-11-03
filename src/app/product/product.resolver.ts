import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { CatalogueItem } from '../models/catalogueItem';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string | CatalogueItem> {
    const id = <string>route.paramMap.get('id');
    return this.productService.getById(id).pipe(
      catchError(() => {
        this.router.navigate(['/']);
        return of('No data');
      })
    );
  }
}
