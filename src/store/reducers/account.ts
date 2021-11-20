import { AnyAction } from 'redux';
import { SessionState } from '../interface';
import { AccountActionType } from '../types';

const initialState: SessionState = {
  isLoading: false,
  user: null,
  token: null
};

export default (state = initialState, action: AnyAction): SessionState => {
  switch (action.type) {
    case AccountActionType.SIGN_IN:
    case AccountActionType.SIGN_OUT:
    case AccountActionType.SET_CURRENT_USER: {
      return { ...state, isLoading: true };
    }
    case AccountActionType.SIGN_IN_SUCCESS: {
      const { token, user } = action.payload;
      return { ...state, token, user, isLoading: false };
    }
    case AccountActionType.SET_CURRENT_USER_SUCCESS:
    case AccountActionType.SET_CURRENT_USER_FAIL: {
      const { token, user } = action.payload;
      return { ...state, token, user, isLoading: false };
    }
    case AccountActionType.SIGN_IN_FAIL:
    case AccountActionType.SIGN_OUT_SUCCESS: {
      return { ...state, user: null, token: null, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
