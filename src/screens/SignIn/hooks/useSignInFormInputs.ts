import React from 'react';
import { useDispatch } from 'react-redux';
import { SignInModel } from '../../../domain/interfaces/account';
import { signInUser } from '../../../store/actions/account';

type ReturnType = {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSignIn: () => void;
};

export default function useSignInFormInputs(): ReturnType {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSignIn = async () => {
    const model: SignInModel = {
      email,
      password
    };
    dispatch(signInUser(model));
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSignIn
  };
}
