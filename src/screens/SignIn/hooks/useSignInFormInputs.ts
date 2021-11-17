import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignInModel } from '../../../domain/interfaces/account';
import { State } from '../../../store';
import { signInUser } from '../../../store/actions/account';
import { SessionState } from '../../../store/interface';

type ReturnType = {
  handleSignIn: (model: SignInModel) => void;
  initialValues: SignInModel;
  isLoading: boolean;
};

export default function useSignInFormInputs(): ReturnType {
  const dispatch = useDispatch();
  const { isLoading } = useSelector<State, SessionState>(
    (state) => state.session
  );
  const initialValues: SignInModel = { email: '', password: '' };

  const handleSignIn = async (model: SignInModel) => {
    dispatch(signInUser(model));
  };

  return {
    handleSignIn,
    initialValues,
    isLoading
  };
}
