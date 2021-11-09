import axios from 'axios';
import { SignInModel, SignUpModel } from '../domain/interfaces/account';

type AccountApi = {
  signIn(model: SignInModel): Promise<string>;
  signUp(model: SignUpModel): Promise<string>;
};

const API_BASE_URL = 'http://22f3-79-66-221-212.ngrok.io/api/v1';

const AccountApi: AccountApi = {
  async signUp(model: SignUpModel): Promise<string> {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/account/signup`,
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
        `${API_BASE_URL}/account/signin`,
        model
      );
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default AccountApi;
