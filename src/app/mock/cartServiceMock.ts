import { of } from 'rxjs';
import { CartLinesMock } from './cartLinesMock';

export const CartServiceMock = {
  createOrUpdate: (productId: string) => {
    return of(CartLinesMock[0]);
  },
  openCartDialog: () => {},
  getAll: () => {
    return of(CartLinesMock);
  },
  delete: (id: string) => {
    return of();
  },
  patch: (id: string, qty: number) => {
    return of(CartLinesMock[0]);
  },
};
