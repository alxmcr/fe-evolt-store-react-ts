import { ProductData } from './appTypes';

export interface ProductInCart extends ProductData {
  quantity: number;
}
