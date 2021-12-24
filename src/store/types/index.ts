import {Dispatch} from 'redux';
import {AuthActions} from './auth.types';

export type StoreActionsTypes = AuthActions;

export type DispatchAction = Dispatch<StoreActionsTypes>;
