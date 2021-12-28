import {
  ADD_LIKE_TO_PROFILE_STORY,
  ProfileActionTypes,
  ProfileState,
  PROFILE_FOLLOW_USER,
  PROFILE_UNFOLLOW_USER,
  SET_PROFILE,
  SET_PROFILE_STORIES,
  PROFILE_DISABLE_FOLLOW_LOADING,
  PROFILE_ENABLE_FOLLOW_LOADING,
  PROFILE_ENABLE_LOADING,
  PROFILE_DISABLE_LOADING,
} from '_store/types/profile.types';
import {addOrRemoveLikeMap} from '_utils/stories';
import {emptyUser} from './auth';

const initialState: ProfileState = {
  loadingFollow: false,
  loadingProfile: false,
  user: emptyUser,
  stories: {
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
  },
};

export default function profileReducer(
  state = initialState,
  action: ProfileActionTypes,
): ProfileState {
  switch (action.type) {
    case PROFILE_ENABLE_LOADING: {
      console.log('enable loading');
      return {...state, loadingProfile: true};
    }

    case PROFILE_DISABLE_LOADING: {
      return {...state, loadingProfile: false};
    }

    case SET_PROFILE: {
      const {profile} = action.payload;
      return {...state!, user: profile};
    }

    case SET_PROFILE_STORIES: {
      return {...state!, stories: action.payload};
    }

    case ADD_LIKE_TO_PROFILE_STORY: {
      const {option, storyId, storyPartIndex, userId} = action.payload;

      if (option !== 'add' && option !== 'remove') {
        return {...state};
      }

      return {
        ...state,
        stories: {
          ...state.stories,
          docs: state.stories.docs.map(
            addOrRemoveLikeMap(storyId, storyPartIndex, userId, option),
          ),
        },
      };
    }

    case PROFILE_FOLLOW_USER: {
      const profile = action.payload;
      if (!state.user) {
        return {...state};
      }
      return {
        ...state,
        user: profile,
      };
    }

    case PROFILE_UNFOLLOW_USER: {
      const profile = action.payload;
      if (!state.user) {
        return {...state};
      }
      return {
        ...state,
        user: profile,
      };
    }

    case PROFILE_ENABLE_FOLLOW_LOADING: {
      return {
        ...state,
        loadingFollow: true,
      };
    }

    case PROFILE_DISABLE_FOLLOW_LOADING: {
      return {
        ...state,
        loadingFollow: false,
      };
    }

    default: {
      return state;
    }
  }
}
