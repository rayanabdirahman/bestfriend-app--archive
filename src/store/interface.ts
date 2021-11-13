import { UserModel } from '../domain/interfaces/account';
import { AlertModel } from '../domain/interfaces/alert';
import { AsyncActionStatus } from './types';

export interface StartedAsyncAction<T> {
  type: T;
  status: AsyncActionStatus.STARTED;
}

export interface SucceededAsyncAction<T, P = any> {
  type: string;
  status: AsyncActionStatus.SUCCEEDED;
  payload: P;
}

export interface FailedAsyncAction<T> {
  type: string;
  status: AsyncActionStatus.FAILED;
  payload: Error;
}

export type AsyncAction<T, P = any> =
  | StartedAsyncAction<T>
  | SucceededAsyncAction<T, P>
  | FailedAsyncAction<T>;

export type SessionState = {
  isLoading: boolean;
  user: UserModel | null;
  token: string | null;
};

export type AlertState = AlertModel[];
