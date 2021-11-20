export type SignInModel = {
  email: string;
  password: string;
};

export type SignUpModel = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type UserModel = {
  id: string;
  createdAt: string;
  email: string;
  isAdmin: boolean;
  updatedAt: string;
  username: string;
};

export type AccountAccessReturnType = {
  token: string;
  user: UserModel;
};
