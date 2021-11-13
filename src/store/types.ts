export enum AlertActionType {
  SET_ALERT = '[Alert]: SET_ALERT',
  REMOVE_ALERT = '[Alert]: REMOVE_ALERT'
}

export enum AsyncActionStatus {
  STARTED = '[Async]: API REQUEST STARTED',
  SUCCEEDED = '[Async]: API REQUEST SUCCEEDED',
  FAILED = '[Async]: API REQUEST FAILED'
}

export enum AccountActionType {
  SIGN_UP = '[Account]: SIGN_UP',
  SIGN_UP_SUCCESS = '[Account]: SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = '[Account]: SIGN_UP_FAIL',
  SIGN_IN = '[Account]: SIGN_IN',
  SIGN_IN_SUCCESS = '[Account]: SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = '[Account]: SIGN_IN_FAIL',
  SIGN_OUT_SUCCESS = '[Account]: SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = '[Account]: SIGN_OUT_FAIL'
}
