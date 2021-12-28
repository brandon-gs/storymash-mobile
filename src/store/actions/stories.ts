import {LikeActions} from '_hooks/components/useButtonLike';
import {Story, StoryPartComment} from '_interfaces/story';
import {RootState} from '_store/reducers';
import axios from '_utils/axios';
import {
  ASYNC_UPDATE_DATA_STORIES,
  UPDATE_STORIES,
  UPDATE_DATA_STORIES,
  StoriesState,
  ADD_COMMENT_TO_STORY,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  ADD_LIKE_TO_STORY,
} from '../types/stories.types';
// Helpers
export const getStoriesUri = (currentLimit: number, currentPage: number) => {
  const defaultQuery = `limit=${currentLimit}&page=${currentPage}&offset=${
    currentPage * currentLimit
  }`;
  return `/story?${defaultQuery}`;
};

// Actions
export const likeStoryAction = (
  storyId: string,
  storyPartIndex: number,
  option: LikeActions,
  userId: string,
) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_LIKE_TO_STORY,
      payload: {
        storyId,
        storyPartIndex,
        userId,
        option,
      },
    });
  };
};

export const updateStories = (docs: Array<Story>): any => {
  return (dispatch: any) => {
    dispatch({type: UPDATE_STORIES, payload: {docs}});
  };
};

export const updateDataStories = (dataStories: StoriesState): any => {
  return (dispatch: any) => {
    dispatch({type: UPDATE_DATA_STORIES, payload: {data: dataStories}});
  };
};

export const asyncUpdateDataStories = (page = -1, limit = -1) => {
  return async (dispatch: any, getState: () => RootState) => {
    const prevDataStories = getState().stories;
    try {
      const currentPage = page >= 0 ? page : prevDataStories.page;
      const currentLimit = limit >= 0 ? limit : prevDataStories.limit;
      const uri = getStoriesUri(currentLimit, currentPage);
      const {data} = await axios.get(uri);
      dispatch({type: ASYNC_UPDATE_DATA_STORIES, payload: {data}});
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };
};

export const removeStories = (): any => {
  return (dispatch: any) => {
    dispatch({type: UPDATE_STORIES, payload: {docs: []}});
  };
};

// STORY PART COMMENTS ACTIONS

export const addCommentToStorPart = (
  indexPart: number,
  comment: StoryPartComment,
): any => {
  return (dispatch: any) => {
    dispatch({type: ADD_COMMENT_TO_STORY, payload: {indexPart, comment}});
  };
};

export const updateComment = (
  indexPart: number,
  indexComment: number,
  comment: StoryPartComment,
): any => {
  return (dispatch: any) => {
    dispatch({
      type: UPDATE_COMMENT,
      payload: {indexPart, indexComment, comment},
    });
  };
};

export const deleteComment = (indexPart: number, indexComment: number): any => {
  return (dispatch: any) => {
    dispatch({type: DELETE_COMMENT, payload: {indexPart, indexComment}});
  };
};

export default {
  updateStories,
  updateDataStories,
  asyncUpdateDataStories,
  removeStories,
  // Comment actions
  addCommentToStorPart,
  updateComment,
  deleteComment,
  // Likes
  likeStoryAction,
};
