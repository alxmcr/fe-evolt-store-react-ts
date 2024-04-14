import {
  FilterProductsCriterias,
  ProductsLimitsPrice,
} from '../@reducers/filterProductsCriteriasReducer';

export const initialFilterProductsCriterias: FilterProductsCriterias = {
  minPrice: 0,
  maxPrice: 0,
  brands: [],
  storages: [],
  bluetooths: [],
  tagsFilter: [],
};

export const initialLimitsPrice: ProductsLimitsPrice = {
  startPrice: 0,
  endPrice: 0,
};
