import { FilterProductsTags } from '../@types/reducerTypes';

type AddTagFilterAction = {
  type: 'added_tag_filter';
  payload: {
    text: string;
  };
};

type DeleteTagFilterAction = {
  type: 'deleted_tag_filter';
  payload: {
    id: string;
  };
};

type TagFilterAction = AddTagFilterAction | DeleteTagFilterAction;

export default function tagsFilterReducer(state: FilterProductsTags, action: TagFilterAction) {
  switch (action.type) {
    case 'added_tag_filter': {
      return { ...state, tagsFilter: [...state.tagsFilter, action.payload] };
    }

    case 'deleted_tag_filter': {
      return { ...state, tagsFilter: state.tagsFilter.filter((t) => t.id !== action.payload.id) };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
