import { CatalogueItem } from './catalogueItem';

export interface CartLine {
  id: string;
  productId: string;
  qty: number;
  product: CatalogueItem;
}
