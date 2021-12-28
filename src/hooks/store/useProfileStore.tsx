import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import useThunkDispatch from '_hooks/useThunkDispatch';
import {AppRootAuthParamList} from '_navigations/navigation-authenticated';
import actions from '_store/actions';
import selectors from '_store/selectors';

interface IUseProfileStoreConfig {
  loadProfile: boolean;
}

/**
 * This hook requires that params has the profileUsername route params
 * or by default use the authenticated usernam
 */
export default function useProfileStore({
  loadProfile = false,
}: IUseProfileStoreConfig) {
  const dispatch = useThunkDispatch();

  // Router navigation params
  const route = useRoute<RouteProp<AppRootAuthParamList, 'Profile'>>();

  // Redux state
  const user = useSelector(selectors.auth.selectUser);
  const profileUser = useSelector(selectors.profile.selectProfileUser);
  const profileStories = useSelector(selectors.profile.selectProfileStories);
  const profileLoadingFollowing = useSelector(
    selectors.profile.selectProfileLoadingFollowing,
  );

  // Hook state
  // Is true when profile was loaded at least one time
  const [profileLoading, setProfileLoading] = useState<boolean>(false);

  // Constants helpers
  const isUserFollowing =
    profileUser && user ? user.following.includes(profileUser._id) : false;

  const profileUsername = route.params
    ? route.params.profileUsername
    : user.username;

  const isOwnProfile = profileUsername === user.username;

  const wasVisitedBefore = Boolean(
    profileUser && profileUser.username === profileUsername,
  );

  // Actions
  const getProfileData = useCallback(async () => {
    setProfileLoading(() => true);
    await dispatch(actions.profile.setProfileStories(profileUsername, 0));
    await dispatch(actions.profile.setProfile(profileUsername));
    setProfileLoading(() => false);
  }, [profileUsername]);

  const followUser = useCallback(async () => {
    if (profileUser) {
      await dispatch(actions.profile.followUser(profileUser.username));
    }
  }, []);

  const unfollowUser = useCallback(async () => {
    if (profileUser) {
      await dispatch(actions.profile.unfollowUser(profileUser.username));
    }
  }, []);

  const handleUserFollow = useCallback(async () => {
    // follow if current user is not follower
    if (!isUserFollowing) {
      await followUser();
    } else {
      await unfollowUser();
    }
    await dispatch(actions.plank.getPlankStories(0));
  }, [isUserFollowing]);

  // Load profile if is config loadProfile as true
  useFocusEffect(
    useCallback(() => {
      if (!wasVisitedBefore && loadProfile) {
        getProfileData();
      }
    }, []),
  );

  return {
    state: {
      profileUser,
      profileStories,
      profileLoadingFollowing,
    },
    actions: {
      getProfileData,
      handleUserFollow,
    },
    helpers: {
      profileLoading,
      isOwnProfile,
      isUserFollowing,
    },
  };
}
