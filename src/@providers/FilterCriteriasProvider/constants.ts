import { FilterProductsCriterias } from '../../@reducers/filterProductsCriteriasReducer';

export const initialState: FilterProductsCriterias = {
  minPrice: 0,
  maxPrice: 0,
  brands: [],
  storages: [],
  bluetooths: [],
  tagsFilter: [],
};
