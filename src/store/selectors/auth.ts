import {RootState} from '_store/reducers';

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectHasAuth = (state: RootState) => state.auth.auth;
export const selectLoading = (state: RootState) => state.auth.loading;
