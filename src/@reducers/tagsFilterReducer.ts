import { TagsFilterAction } from '../@types/filterTypes';
import { FilterProductsTags } from '../@types/reducerTypes';

export default function tagsFilterReducer(
  state: FilterProductsTags,
  action: TagsFilterAction,
): FilterProductsTags {
  switch (action.type) {
    case 'added_tag_filter': {
      return { ...state, tags: [...state.tags, action.payload] };
    }

    case 'deleted_tag_filter': {
      return { ...state, tags: state.tags.filter((t) => t.id !== action.payload.id) };
    }

    case 'updated_tag_filter': {
      return {
        ...state,
        tags: state.tags.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload;
          }
          return t;
        }),
      };
    }

    case 'reset_tags_filter': {
      return {
        ...state,
        tags: [],
      };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
