import {
  FailedAsyncAction,
  StartedAsyncAction,
  SucceededAsyncAction
} from '../interface';
import { AsyncActionStatus } from '../types';

function startedAsyncAction<T>(type: T): StartedAsyncAction<T> {
  return {
    type,
    status: AsyncActionStatus.STARTED
  };
}

function succeededAsyncAction<T, P>(
  type: T,
  payload: P
): SucceededAsyncAction<T, P> {
  return {
    type: `${type}_SUCCESS`,
    status: AsyncActionStatus.SUCCEEDED,
    payload
  };
}

function failedAsyncAction<T>(type: T, error: Error): FailedAsyncAction<T> {
  return {
    type: `${type}_FAIL`,
    status: AsyncActionStatus.FAILED,
    payload: error
  };
}

export function async<T, P>(
  type: T,
  action: (...args: any[]) => Promise<P>,
  ...args: any[]
) {
  return async (dispatch: any) => {
    dispatch(startedAsyncAction(type));
    try {
      const payload = await action(...args);
      dispatch(succeededAsyncAction(type, payload));
    } catch (error: any) {
      dispatch(failedAsyncAction(type, error));
    }
  };
}
