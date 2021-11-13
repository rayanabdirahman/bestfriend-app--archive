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
    case AccountActionType.SIGN_IN: {
      return { ...state, isLoading: true };
    }
    case AccountActionType.SIGN_IN_SUCCESS: {
      const { token, user } = action.payload;
      return { ...state, token, user, isLoading: false };
    }
    case AccountActionType.SIGN_IN_FAIL: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
