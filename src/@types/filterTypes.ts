export type FilterBrandData = {
  id: string;
  name: string;
  checked: boolean;
};

export type FilterStorageData = {
  id: string;
  capacity: string;
  checked: boolean;
};

export type FilterBluetoothData = {
  id: string;
  version: string;
  checked: boolean;
};

export type TagFilterProduct = {
  id: string;
  category: 'range-price' | 'brand' | 'storage' | 'bluetooth';
  valueText: string;
  valueId: string;
};

export type AddTagFilterAction = {
  type: 'added_tag_filter';
  payload: TagFilterProduct;
};

export type UpdateTagFilterAction = {
  type: 'updated_tag_filter';
  payload: TagFilterProduct;
};

export type DeleteTagFilterAction = {
  type: 'deleted_tag_filter';
  payload: {
    id: string;
  };
};

export type TagFilterAction = AddTagFilterAction | DeleteTagFilterAction | UpdateTagFilterAction;
