import { FilterCriteriasAction, FilterProductsCriterias } from '../@types/reducerTypes';

export default function filterProductsCriteriasReducer(
  state: FilterProductsCriterias,
  action: FilterCriteriasAction,
): FilterProductsCriterias {
  switch (action.type) {
    case 'add_brand': {
      return { ...state, brands: [...state.brands, action.payload] };
    }
    case 'add_storage': {
      return { ...state, storages: [...state.storages, action.payload] };
    }
    case 'add_bluetooth': {
      return { ...state, bluetooths: [...state.bluetooths, action.payload] };
    }

    case 'update_min_price': {
      return { ...state, minPrice: action.payload.min };
    }

    case 'update_max_price': {
      return { ...state, maxPrice: action.payload.max };
    }

    case 'checked_brand': {
      const brandsChecked = state.brands.map((br) => {
        if (br.id === action.payload.id) {
          return { ...br, checked: action.payload.checked };
        }
        return br;
      });

      return {
        ...state,
        brands: brandsChecked,
      };
    }

    case 'checked_storage': {
      const storagesChecked = state.storages.map((s) => {
        if (s.id === action.payload.id) {
          return { ...s, checked: action.payload.checked };
        }
        return s;
      });

      return {
        ...state,
        storages: storagesChecked,
      };
    }

    case 'checked_bluetooth': {
      const bluetoothsChecked = state.bluetooths.map((bl) => {
        if (bl.id === action.payload.id) {
          return { ...bl, checked: action.payload.checked };
        }
        return bl;
      });

      return {
        ...state,
        bluetooths: bluetoothsChecked,
      };
    }

    case 'reset_filter_criterias': {
      console.log('reset filter');
      const brandsCriteriasReset = [
        ...state.brands.map((b) => {
          return { ...b, checked: false };
        }),
      ];

      const storagesCriteriasReset = [
        ...state.storages.map((s) => {
          return { ...s, checked: false };
        }),
      ];

      const bluetoothsCriteriasReset = [
        ...state.bluetooths.map((bl) => {
          return { ...bl, checked: false };
        }),
      ];

      return {
        ...state,
        minPrice: 0,
        maxPrice: 0,
        brands: brandsCriteriasReset,
        storages: storagesCriteriasReset,
        bluetooths: bluetoothsCriteriasReset,
      };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
