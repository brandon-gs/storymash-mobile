import {Dispatch} from 'redux';
import {AuthActions} from './auth.types';
import {FavoritesStoriesActionTypes} from './favorites.types';
import {PlankStoriesActionTypes} from './plank.types';
import {ProfileActionTypes} from './profile.types';
import {RankStoriesActionTypes} from './rank.types';
import {SearchActionTypes} from './search.types';
import {StoriesActionTypes} from './stories.types';

export type StoreActionsTypes =
  | AuthActions
  | FavoritesStoriesActionTypes
  | PlankStoriesActionTypes
  | ProfileActionTypes
  | RankStoriesActionTypes
  | SearchActionTypes
  | StoriesActionTypes;

export type DispatchAction = Dispatch<StoreActionsTypes>;
