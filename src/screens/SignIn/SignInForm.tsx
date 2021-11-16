import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Incubator, View } from 'react-native-ui-lib';
import { Button } from '../../components';
import { AuthStackParamList } from '../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../navigation/domain/enums';
import AuthFormTemplate from '../../components/templates/AuthFormTemplate';
import theme from '../../styles/constants/theme';
import { TextInput } from 'react-native';
import useSignInFormInputs from './hooks/useSignInFormInputs';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { SessionState } from '../../store/interface';
const { TextField } = Incubator;

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_IN_FORM
>;

const SignInFormScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading } = useSelector<State, SessionState>(
    (state) => state.session
  );
  const emailInputRef = React.useRef<TextInput>();
  const passwordInputRef = React.useRef<TextInput>();
  const { email, setEmail, password, setPassword, handleSignIn } =
    useSignInFormInputs();

  const BUTTON_DISABLED_STATE = isLoading || !email || !password ? true : false;

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  return (
    <AuthFormTemplate
      title="Welcome back!"
      subTitle="Enter your credentials to continue"
    >
      <View row bottom style={{ marginBottom: 24 }}>
        <TextField
          ref={emailInputRef as any}
          placeholder="Email"
          containerStyle={{ flex: 1 }}
          fieldStyle={{
            borderBottomWidth: 1,
            borderColor: theme.color.lightgray,
            paddingBottom: 4
          }}
          onChangeText={(value) => setEmail(value)}
          enableErrors
          validate={['required', 'email']}
          validateOnChange
          validationMessage={['Email is required', 'Email is invalid']}
        />
      </View>

      <View row bottom style={{ marginBottom: 24 }}>
        <TextField
          ref={passwordInputRef as any}
          placeholder="Password"
          containerStyle={{ flex: 1 }}
          fieldStyle={{
            borderBottomWidth: 1,
            borderColor: theme.color.lightgray,
            paddingBottom: 4
          }}
          onChangeText={(value) => setPassword(value)}
          enableErrors
          validate={['required']}
          validateOnChange
          validationMessage={['Password is required']}
          hint="Password mush be at least 8 characters long"
        />
      </View>

      <Button
        onPress={handleSignIn}
        type="primary"
        block
        disabled={BUTTON_DISABLED_STATE}
        loading={isLoading}
      >
        Sign in
      </Button>
    </AuthFormTemplate>
  );
};

export default SignInFormScreen;
