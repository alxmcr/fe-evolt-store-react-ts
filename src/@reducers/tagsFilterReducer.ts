import { TagFilterAction } from '../@types/filterTypes';
import { FilterProductsTags } from '../@types/reducerTypes';

export default function tagsFilterReducer(
  state: FilterProductsTags,
  action: TagFilterAction,
): FilterProductsTags {
  switch (action.type) {
    case 'added_tag_filter': {
      return {
        ...state,
        tagsFilter: [...state.tagsFilter, action.payload],
      };
    }

    case 'deleted_tag_filter': {
      return { ...state, tagsFilter: state.tagsFilter.filter((t) => t.id !== action.payload.id) };
    }

    case 'updated_tag_filter': {
      return {
        ...state,
        tagsFilter: state.tagsFilter.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload;
          }
          return t;
        }),
      };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
