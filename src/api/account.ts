import axios from 'axios';
import config from '../config';
import { SignInModel, SignUpModel } from '../domain/interfaces/account';

type AccountApi = {
  signIn(model: SignInModel): Promise<string>;
  signUp(model: SignUpModel): Promise<string>;
};

const AccountApi: AccountApi = {
  async signUp(model: SignUpModel): Promise<string> {
    try {
      const response = await axios.post(
        `${config.API_DEV_URL}/account/signup`,
        model
      );
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async signIn(model: SignInModel): Promise<string> {
    try {
      const response = await axios.post(
        `${config.API_DEV_URL}/account/signin`,
        model
      );
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default AccountApi;
