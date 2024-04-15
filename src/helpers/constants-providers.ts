import { FilterProductsCriterias, FilterProductsTags, ProductsLimitsPrice } from "../@types/reducerTypes";

export const initialFilterProductsCriterias: FilterProductsCriterias = {
  minPrice: 0,
  maxPrice: 0,
  brands: [],
  storages: [],
  bluetooths: [],
};

export const initialFilterProductsTags: FilterProductsTags = {
  tags: [],
};

export const initialLimitsPrice: ProductsLimitsPrice = {
  startPrice: 0,
  endPrice: 0,
};
