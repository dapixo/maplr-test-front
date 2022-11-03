import { of } from 'rxjs';
import { catalogueItemsDarkMock, catalogueItemsMock } from './catalogueItemsMock';

export const ProductServiceMock = {
  getAll: () => {
    return of(catalogueItemsMock);
  },
  getById: (id: string) => {
    return of(catalogueItemsMock[0]);
  },
  getByType: (type: string) => {
    return of(catalogueItemsDarkMock);
  },
};
