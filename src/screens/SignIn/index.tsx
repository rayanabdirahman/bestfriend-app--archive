import React from 'react';
import { Space, Typography, Button, AuthTemplate } from '../../components';

const SignInScreen: React.FC = () => {
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
          <Button onPress={() => alert('links clicked')} type="link">
            Sign up
          </Button>
        </Space>
      </Space>
    </AuthTemplate>
  );
};

export default SignInScreen;
