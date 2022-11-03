import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CatalogueItem } from 'src/app/models/catalogueItem';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  catalogueItems: CatalogueItem[] = [];
  dropdownOptions = [{ type: 'Clear' }, { type: 'Amber' }, { type: 'Dark' }];
  selectedType: { type: string };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((queryParams) => {
        if (queryParams && queryParams['type']) {
          this.selectedType = { type: queryParams['type'] };
          this.onFilter(this.selectedType);
        }
      });
  }

  getAllProducts() {
    return this.productService
      .get()
      .subscribe((catalogueItems: CatalogueItem[]) => {
        this.catalogueItems = catalogueItems;
      });
  }

  onFilter(select: { type: string }) {
    if (select && select.type) {
      this.addTypeParams(select.type);
      this.productService
        .getByType(select.type)
        .subscribe((result: CatalogueItem[]) => {
          this.catalogueItems = result;
        });
    }
  }

  onClearFilter() {
    this.getAllProducts();
    this.router.navigate(['/']);
  }

  addTypeParams(type: string) {
    const queryParams: Params = { type };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
