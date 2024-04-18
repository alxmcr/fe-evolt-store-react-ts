import { ProductData } from '../@types/appTypes';
import { TagFilterProduct } from '../@types/filterTypes';
import { FilterAction, FilterProductsCriterias } from '../@types/reducerTypes';

export const uncheckedByCategory = (
  tagToRemove: TagFilterProduct,
  dispatch: React.Dispatch<FilterAction>,
) => {
  const { category, valueId } = tagToRemove;

  switch (category) {
    case 'brand':
      dispatch({
        type: 'checked_brand',
        payload: {
          id: valueId,
          checked: false,
        },
      });
      break;
    case 'storage':
      dispatch({
        type: 'checked_storage',
        payload: {
          id: valueId,
          checked: false,
        },
      });
      break;

    case 'bluetooth':
      dispatch({
        type: 'checked_bluetooth',
        payload: {
          id: valueId,
          checked: false,
        },
      });
      break;

    default:
      throw Error('Unknown tag category');
  }
};

export const resetRangePriceFilter = (dispatch: React.Dispatch<FilterAction>) => {
  dispatch({
    type: 'update_min_price',
    payload: {
      min: 0,
    },
  });

  dispatch({
    type: 'update_max_price',
    payload: {
      max: 0,
    },
  });
};

export const filterByBrands = (products: ProductData[] = [], brands: string[]) => {
  return products.filter((product) => brands.includes(product.brand.name));
};

export const filterProductsByFilterCriterias = (
  products: ProductData[] = [],
  filterProductsCriterias: FilterProductsCriterias,
) => {
  if (products.length === 0) {
    return products;
  }

  if (filterProductsCriterias === null || filterProductsCriterias === undefined) {
    return products;
  }

  // Checkes
  //const brandsChecked =

  // Get data
  const brandNames = filterProductsCriterias.brands.map((b) => {
    if (b.checked) {
      return b.name;
    }
    return '';
  });

  return products.filter((product) => brandNames.includes(product.brand.name));
};
