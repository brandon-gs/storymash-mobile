import {combineReducers} from 'redux';
// Reducers
import auth from './auth';
import favorites from './favorites';
import plank from './plank';
import profile from './profile';
import rank from './rank';
import search from './search';
import stories from './stories';
import story from './story';
// Types
import {AuthState} from '_store/types/auth.types';
import {ProfileState} from '_store/types/profile.types';
import {FavoritesStoriesState} from '_store/types/favorites.types';
import {RankStoriesState} from '_store/types/rank.types';
import {SearchState} from '_store/types/search.types';
import {StoriesState} from '_store/types/stories.types';
import {StoryState} from '_store/types/story.types';
import {PlankStoriesState} from '_store/types/plank.types';

export default combineReducers({
  auth,
  profile,
  plank,
  favorites,
  rank,
  search,
  stories,
  story,
});

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
  plank: PlankStoriesState;
  favorites: FavoritesStoriesState;
  rank: RankStoriesState;
  search: SearchState;
  stories: StoriesState;
  story: StoryState;
}

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

declare module 'redux-persist/es/persistReducer' {
  interface PersistPartial extends RootState {}
}
