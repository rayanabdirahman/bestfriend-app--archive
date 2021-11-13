import AccountApi from '../api/account';
import { SignInModel, SignUpModel } from '../domain/interfaces/account';

type AccountService = {
  signIn(model: SignInModel): Promise<any>;
};

const AccountService: AccountService = {
  async signIn(model: SignInModel): Promise<any> {
    const response = AccountApi.signIn(model);
    return response;
  }
};

export default AccountService;
