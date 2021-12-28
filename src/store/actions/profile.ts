import {Dispatch} from 'redux';
import {
  ADD_LIKE_TO_PROFILE_STORY,
  ProfileActionTypes,
  PROFILE_DISABLE_FOLLOW_LOADING,
  PROFILE_DISABLE_LOADING,
  PROFILE_ENABLE_FOLLOW_LOADING,
  PROFILE_ENABLE_LOADING,
  PROFILE_FOLLOW_USER,
  PROFILE_UNFOLLOW_USER,
  SET_PROFILE,
  SET_PROFILE_STORIES,
} from '_store/types/profile.types';
import * as profileAPI from '_services/profile';
import {RootState} from '_store/reducers/';
import {LikeActions} from '_hooks/components/useButtonLike';
import {StoreActionsTypes} from '_store/types/';
import {Alert} from 'react-native';

// Actions
export const setProfile = (profileUsername: string) => {
  return async (dispatch: Dispatch<StoreActionsTypes>) => {
    try {
      const {user} = await profileAPI.getProfile(profileUsername);
      dispatch({
        type: SET_PROFILE,
        payload: {
          profile: user,
        },
      });
    } catch (e) {
      setTimeout(() => {
        Alert.alert('Error', 'Error al cargar el perfil, inténtalo más tarde');
      }, 100);
    }
  };
};

export const setProfileStories = (
  profileUsername: string,
  page = -1,
  limit = -1,
) => {
  return async (
    dispatch: Dispatch<StoreActionsTypes>,
    getState: () => RootState,
  ) => {
    const prevDataStories = getState().profile.stories;
    const currentPage = page >= 0 ? page : prevDataStories.page;
    const currentLimit = limit >= 0 ? limit : prevDataStories.limit;
    try {
      const stories = await profileAPI.getProfileStories(
        profileUsername,
        currentLimit,
        currentPage,
      );
      dispatch({
        type: SET_PROFILE_STORIES,
        payload: stories,
      });
    } catch (e) {
      setTimeout(() => {
        Alert.alert(
          'Error',
          'Error al cargar historias de este usuario, inténtalo más tarde',
        );
      }, 100);
    }
  };
};

export const likeProfileStory = (
  storyId: string,
  storyPartIndex: number,
  option: LikeActions,
  userId: string,
) => {
  return async (dispatch: Dispatch<ProfileActionTypes>) => {
    dispatch({
      type: ADD_LIKE_TO_PROFILE_STORY,
      payload: {
        storyId,
        storyPartIndex,
        userId,
        option,
      },
    });
  };
};

export const followUser = (username?: string) => {
  return async (
    dispatch: Dispatch<StoreActionsTypes>,
    getState: () => RootState,
  ) => {
    dispatch({
      type: PROFILE_ENABLE_FOLLOW_LOADING,
    });
    try {
      const userId = getState().auth.user._id;
      const profileUsername = username
        ? username
        : getState().profile.user!.username;

      const {profile} = await profileAPI.putFollowUser(profileUsername);
      dispatch({
        type: PROFILE_FOLLOW_USER,
        payload: profile,
      });
      dispatch({
        type: '@AUTH/USER_ADD_FOLLOWER',
        payload: {
          userToFollowId: profile._id,
        },
      });
      dispatch({
        type: '@SEARCH/FOLLOW_PROFILE',
        payload: {
          profileId: profile._id,
          userId,
        },
      });
    } catch (e) {
      setTimeout(() => {
        Alert.alert('Error', 'Error al seguir usuario, inténtalo más tarde');
      }, 100);
    }
    dispatch({
      type: PROFILE_DISABLE_FOLLOW_LOADING,
    });
  };
};

export const unfollowUser = (username = '') => {
  return async (
    dispatch: Dispatch<StoreActionsTypes>,
    getState: () => RootState,
  ) => {
    dispatch({
      type: PROFILE_ENABLE_FOLLOW_LOADING,
    });
    try {
      const userId = getState().auth.user._id;
      const profileUsername = username
        ? username
        : getState().profile.user!.username;

      const {profile} = await profileAPI.putUnfollowUser(profileUsername);
      dispatch({
        type: PROFILE_UNFOLLOW_USER,
        payload: profile,
      });
      dispatch({
        type: '@AUTH/USER_REMOVE_FOLLOWER',
        payload: {
          userToUnfollowId: profile._id,
        },
      });
      dispatch({
        type: '@SEARCH/UNFOLLOW_PROFILE',
        payload: {
          profileId: profile._id,
          userId,
        },
      });
    } catch (e) {
      setTimeout(() => {
        Alert.alert(
          'Error',
          'Error al dejar de seguir usuario, inténtalo más tarde',
        );
      }, 100);
    }
    dispatch({
      type: PROFILE_DISABLE_FOLLOW_LOADING,
    });
  };
};

export const enableLoadingProfile = () => {
  return (dispatch: Dispatch<StoreActionsTypes>) => {
    dispatch({
      type: PROFILE_ENABLE_LOADING,
    });
  };
};

export const disableLoadingProfile = () => {
  return (dispatch: Dispatch<StoreActionsTypes>) => {
    dispatch({
      type: PROFILE_DISABLE_LOADING,
    });
  };
};
