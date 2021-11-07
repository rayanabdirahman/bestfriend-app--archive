import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthTemplate, Button, Space, Typography } from '../../components';
import { AuthStackParamList } from '../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../navigation/domain/enums';

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_UP
>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthTemplate
      title="Let's get started!"
      subTitle="Your place to buy, discover and share the brands you love."
    >
      <Space align="center">
        <Button onPress={() => alert('button clicked')} type="primary" block>
          Sign up with email
        </Button>

        <Space justify="center" direction="horizontal" align="center">
          <Typography.Text>Already have an account? </Typography.Text>
          <Button
            onPress={() =>
              navigation.navigate(AuthStackScreenNamesEnum.SIGN_IN)
            }
            type="link"
          >
            Sign in
          </Button>
        </Space>
      </Space>
    </AuthTemplate>
  );
};

export default SignUpScreen;
