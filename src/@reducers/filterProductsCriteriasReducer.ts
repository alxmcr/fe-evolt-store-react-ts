import {
  FilterBluetoothData,
  FilterBrandData,
  FilterStorageData,
} from '../@types/filterTypes';

type UpdateMinPriceAction = {
  type: 'update_min_price';
  payload: {
    min: number;
  };
};

type UpdateMaxPriceAction = {
  type: 'update_max_price';
  payload: {
    max: number;
  };
};

type CheckedBrandAction = {
  type: 'checked_brand';
  payload: {
    id: string;
    checked: boolean;
  };
};

type CheckedStorageAction = {
  type: 'checked_storage';
  payload: {
    id: string;
    checked: boolean;
  };
};

type CheckedBluetoothAction = {
  type: 'checked_bluetooth';
  payload: {
    id: string;
    checked: boolean;
  };
};

type FilterAction =
  | UpdateMinPriceAction
  | UpdateMaxPriceAction
  | CheckedBrandAction
  | CheckedStorageAction
  | CheckedBluetoothAction;

type FilterProductsCriterias = {
  minPrice: 0;
  maxPrice: 0;
  brands: FilterBrandData[];
  storages: FilterStorageData[];
  bluetooths: FilterBluetoothData[];
  tagsFilter: [];
};

export default function filterProductsCriteriasReducer(
  state: FilterProductsCriterias,
  action: FilterAction,
) {
  switch (action.type) {
    case 'update_min_price': {
      return { ...state, minPrice: action.payload.min };
    }
    case 'update_max_price': {
      return { ...state, maxPrice: action.payload.max };
    }
    case 'checked_brand': {
      return {
        ...state,
        brands: state.brands.map((br) => {
          if (br.id === action.payload.id) {
            return { ...br, checked: action.payload.checked };
          }
        }),
      };
    }
    case 'checked_storage': {
      return {
        ...state,
        storages: state.storages.map((s) => {
          if (s.id === action.payload.id) {
            return { ...s, checked: action.payload.checked };
          }
        }),
      };
    }
    case 'checked_bluetooth': {
      return {
        ...state,
        bluetooths: state.bluetooths.map((bl) => {
          if (bl.id === action.payload.id) {
            return { ...bl, checked: action.payload.checked };
          }
        }),
      };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
