import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Space, Typography, Button, AuthTemplate } from '../../components';
import { AuthStackParamList } from '../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../navigation/domain/enums';

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_IN
>;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthTemplate
      title="Welcome back!"
      subTitle="Your place to buy, discover and share the brands you love."
    >
      <Space align="center">
        <Button onPress={() => alert('button clicked')} type="primary" block>
          Sign in with email
        </Button>

        <Space justify="center" direction="horizontal" align="center">
          <Typography.Text>Don't have an account? </Typography.Text>
          <Button
            onPress={() => navigation.push(AuthStackScreenNamesEnum.SIGN_UP)}
            type="link"
          >
            Sign up
          </Button>
        </Space>
      </Space>
    </AuthTemplate>
  );
};

export default SignInScreen;
