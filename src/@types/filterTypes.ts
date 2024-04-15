export type FilterProductTag = {
  id: string;
  key: string;
  value: string;
  typeValue: 'string' | 'number';
};

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

export type AddTagFilterAction = {
  type: 'added_tag_filter';
  payload: FilterProductTag;
};

export type DeleteTagFilterAction = {
  type: 'deleted_tag_filter';
  payload: {
    id: string;
  };
};

export type UpdateTagFilterAction = {
  type: 'updated_tag_filter';
  payload: FilterProductTag;
};

export type TagFilterAction = AddTagFilterAction | DeleteTagFilterAction | UpdateTagFilterAction;
