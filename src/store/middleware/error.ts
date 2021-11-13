import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AlertTypeEnum } from '../../domain/enums/alert';
import { setAlert } from '../actions/alert';
import { AsyncActionStatus } from '../types';

const onErrorApi =
  ({ dispatch }: { dispatch: ThunkDispatch<unknown, unknown, AnyAction> }) =>
  (next: any) =>
  (action: AnyAction) => {
    next(action);

    if (action.status === AsyncActionStatus.FAILED) {
      dispatch(
        setAlert({
          message: action.payload,
          type: AlertTypeEnum.ERROR
        })
      );
    }
  };

export default onErrorApi;
