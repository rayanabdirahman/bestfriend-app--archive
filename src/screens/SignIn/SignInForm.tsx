import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Incubator, View } from 'react-native-ui-lib';
import { Button, Space } from '../../components';
import { AuthStackParamList } from '../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../navigation/domain/enums';
import AuthFormTemplate from '../../components/templates/AuthFormTemplate';
import theme from '../../styles/constants/theme';
import { TextInput } from 'react-native';
const { TextField } = Incubator;

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_IN_FORM
>;

const SignInFormScreen: React.FC<Props> = ({ navigation }) => {
  const emailInputRef = React.useRef<TextInput>();
  const passwordInputRef = React.useRef<TextInput>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  return (
    <AuthFormTemplate
      title="Welcome back!"
      subTitle="Enter your credentials to continue"
    >
      <View row bottom style={{ marginBottom: 36 }}>
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

      <View row bottom style={{ marginBottom: 36 }}>
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
        />
      </View>

      <Space justify="center" direction="horizontal" align="center">
        <Button
          onPress={() => alert('submit button clicked')}
          type="primary"
          block
          disabled={email && password ? false : true}
        >
          Next
        </Button>
      </Space>
    </AuthFormTemplate>
  );
};

export default SignInFormScreen;
