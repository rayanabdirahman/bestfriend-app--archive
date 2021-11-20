import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config';
import { UserModel } from '../domain/interfaces/account';

type LocalStorageService = {
  setAccessToken(token: string): Promise<void>;
  setUser(user: UserModel): Promise<void>;
  getAccessToken(): Promise<string | null>;
  getUser(): Promise<UserModel | null>;
  clearAll(): Promise<void>;
};

const LocalStorageService: LocalStorageService = {
  async setAccessToken(token: string): Promise<void> {
    await AsyncStorage.setItem(`${config.LOCAL_STORAGE_ACCESS_TOKEN}`, token);
  },
  async setUser(user: UserModel): Promise<void> {
    await AsyncStorage.setItem(
      `${config.LOCAL_STORAGE_USER}`,
      JSON.stringify(user)
    );
  },
  async getAccessToken(): Promise<string | null> {
    return await AsyncStorage.getItem(`${config.LOCAL_STORAGE_ACCESS_TOKEN}`);
  },
  async getUser(): Promise<UserModel | null> {
    const user = await AsyncStorage.getItem(`${config.LOCAL_STORAGE_USER}`);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  },
  async clearAll(): Promise<void> {
    await AsyncStorage.removeItem(`${config.LOCAL_STORAGE_ACCESS_TOKEN}`);
    await AsyncStorage.removeItem(`${config.LOCAL_STORAGE_USER}`);
  }
};

export default LocalStorageService;
