import {useDispatch} from 'react-redux';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '_store/store';

const useThunkDispatch = () =>
  useDispatch<ThunkDispatch<RootState, unknown, Action>>();

export default useThunkDispatch;
