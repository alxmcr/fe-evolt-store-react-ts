import { TagFilterProduct } from '../@types/filterTypes';
import { FilterAction } from '../@types/reducerTypes';

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

    case 'range-price':
      console.log('🚀 ~ tagToRemove:', tagToRemove);
      break;

    default:
      throw Error('Unknown tag category');
  }
};
