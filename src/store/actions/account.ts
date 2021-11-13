import { SignInModel } from '../../domain/interfaces/account';
import AccountService from '../../services/account';
import { AccountActionType } from '../types';
import { async } from './asyncAction';

export const signInUser = (model: SignInModel) => {
  return async(AccountActionType.SIGN_IN, AccountService.signIn, model);
};
