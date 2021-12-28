import {
  LIKE_RANK_STORY,
  RankStoriesActionTypes,
  RankStoriesState,
  SET_RANK_STORIES,
} from '_store/types/rank.types';
import {addOrRemoveLikeMap} from '_utils/stories';

const initialRankStoriesState: RankStoriesState = {
  docs: [],
  totalDocs: 0,
  offset: 0,
  limit: 9,
  totalPages: 0,
  page: 0,
  pagingCounter: 0,
  hasPrevPage: false,
  hasNextPage: true,
  prevPage: null,
  nextPage: 1,
};

export default function rankStoriesReducer(
  state = initialRankStoriesState,
  action: RankStoriesActionTypes,
): RankStoriesState {
  switch (action.type) {
    case SET_RANK_STORIES: {
      return action.payload.data;
    }
    case LIKE_RANK_STORY: {
      const {option, storyId, storyPartIndex, userId} = action.payload;

      if (option !== 'add' && option !== 'remove') {
        return {...state};
      }

      return {
        ...state,
        docs: state.docs.map(
          addOrRemoveLikeMap(storyId, storyPartIndex, userId, option),
        ),
      };
    }
    default: {
      return state;
    }
  }
}
