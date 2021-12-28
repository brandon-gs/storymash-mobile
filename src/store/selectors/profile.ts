import {RootState} from '_store/reducers';

export const selectProfileUser = (state: RootState) => state.profile.user;
export const selectProfileStories = (state: RootState) => state.profile.stories;
export const selectProfileLoading = (state: RootState) =>
  state.profile.loadingProfile;
export const selectProfileLoadingFollowing = (state: RootState) =>
  state.profile.loadingFollow;
