import {LikeActions} from '_hooks/components/useButtonLike';
import {User} from '_interfaces/user';
import {StoriesState} from './stories.types';

export const PROFILE_ENABLE_LOADING = '@PROFILE/ENABLE_LOADING';
export const PROFILE_DISABLE_LOADING = '@PROFILE/DISABLE_LOADING';
export const SET_PROFILE = '@PROFILE/SET_PROFILE';
export const SET_PROFILE_STORIES = '@PROFILE/SET_PROFILE_STORIES';
export const ADD_LIKE_TO_PROFILE_STORY = '@PROFILE/ADD_LIKE_TO_PROFILE_STORY';
export const PROFILE_FOLLOW_USER = '@PROFILE/FOLLOW_USER';
export const PROFILE_UNFOLLOW_USER = '@PROFILE/UNFOLLOW_USER';
export const PROFILE_ENABLE_FOLLOW_LOADING = '@PROFILE/ENABLE_FOLLOW_LOADING';
export const PROFILE_DISABLE_FOLLOW_LOADING = '@PROFILE/DISABLE_FOLLOW_LOADING';

// State
export type ProfileState = {
  user: User;
  stories: StoriesState;
  loadingFollow: boolean;
  loadingProfile: boolean;
};

// Actions
interface EnableLoadingFollowing {
  type: typeof PROFILE_ENABLE_FOLLOW_LOADING;
}

interface DisableLoadingFollowing {
  type: typeof PROFILE_DISABLE_FOLLOW_LOADING;
}

interface SetProfile {
  type: typeof SET_PROFILE;
  payload: {
    profile: User;
  };
}

interface SetProfileStories {
  type: typeof SET_PROFILE_STORIES;
  payload: StoriesState;
}

interface AddLikeToProfileStory {
  type: typeof ADD_LIKE_TO_PROFILE_STORY;
  payload: {
    storyId: string;
    storyPartIndex: number;
    userId: string;
    option: LikeActions;
  };
}

interface FollowUser {
  type: typeof PROFILE_FOLLOW_USER;
  payload: User;
}

interface UnfollowUser {
  type: typeof PROFILE_UNFOLLOW_USER;
  payload: User;
}

interface ProfileEnableLoading {
  type: typeof PROFILE_ENABLE_LOADING;
}

interface ProfileDisableLoading {
  type: typeof PROFILE_DISABLE_LOADING;
}

export type ProfileActionTypes =
  | SetProfile
  | SetProfileStories
  | AddLikeToProfileStory
  | FollowUser
  | UnfollowUser
  | EnableLoadingFollowing
  | DisableLoadingFollowing
  | ProfileEnableLoading
  | ProfileDisableLoading;
