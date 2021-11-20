import { SignInModel } from '../../domain/interfaces/account';
import AccountService from '../../services/account';
import { AccountActionType } from '../types';
import { async } from './asyncAction';

export const signInUserAction = (model: SignInModel) => {
  return async(AccountActionType.SIGN_IN, AccountService.signIn, model);
};

export const signOutUserAction = () => {
  return async(AccountActionType.SIGN_OUT, AccountService.signOut);
};

export const setCurrentUserAction = () => {
  return async(
    AccountActionType.SET_CURRENT_USER,
    AccountService.setCurrentUser
  );
};
