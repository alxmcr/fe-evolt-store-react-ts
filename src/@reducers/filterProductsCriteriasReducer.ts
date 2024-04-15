import { TagFilterKeys } from '../@enums/appEnums';
import { FilterBluetoothData, FilterBrandData, FilterStorageData } from '../@types/filterTypes';

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

type AddBrandAction = {
  type: 'add_brand';
  payload: FilterBrandData;
};

type AddStorageAction = {
  type: 'add_storage';
  payload: FilterStorageData;
};

type AddBluetoothAction = {
  type: 'add_bluetooth';
  payload: FilterBluetoothData;
};

export type FilterAction =
  | AddBrandAction
  | AddStorageAction
  | AddBluetoothAction
  | UpdateMinPriceAction
  | UpdateMaxPriceAction
  | CheckedBrandAction
  | CheckedStorageAction
  | CheckedBluetoothAction;

export type FilterProductsCriterias = {
  minPrice: number;
  maxPrice: number;
  brands: FilterBrandData[];
  storages: FilterStorageData[];
  bluetooths: FilterBluetoothData[];
  tagsFilter: TagFilterKeys[];
};

export type ProductsLimitsPrice = {
  startPrice: number;
  endPrice: number;
};

export default function filterProductsCriteriasReducer(
  state: FilterProductsCriterias,
  action: FilterAction,
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

    default: {
      throw Error(`Unknown action`);
    }
  }
}
