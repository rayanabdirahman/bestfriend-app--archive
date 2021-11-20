import AccountApi from '../api/account';
import {
  AccountAccessReturnType,
  SignInModel,
  UserModel
} from '../domain/interfaces/account';
import LocalStorageService from './localStorage';

type SetCurrentUserReturnType = {
  user: UserModel | null;
  token: string | null;
};

type AccountService = {
  signIn(model: SignInModel): Promise<AccountAccessReturnType>;
  signOut(): Promise<void>;
  setCurrentUser(): Promise<SetCurrentUserReturnType>;
};

const AccountService: AccountService = {
  async signIn(model: SignInModel): Promise<AccountAccessReturnType> {
    const { user, token } = await AccountApi.signIn(model);
    LocalStorageService.setAccessToken(token);
    LocalStorageService.setUser(user);
    return { user, token };
  },
  async signOut(): Promise<void> {
    LocalStorageService.clearAll();
  },
  async setCurrentUser(): Promise<SetCurrentUserReturnType> {
    const user = await LocalStorageService.getUser();
    const token = await LocalStorageService.getAccessToken();
    return { user, token };
  }
};

export default AccountService;
