import React from 'react';
import { AuthTemplate, Button, Space, Typography } from '../../components';

const SignUpScreen: React.FC = () => {
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
          <Button onPress={() => alert('links clicked')} type="link">
            Sign in
          </Button>
        </Space>
      </Space>
    </AuthTemplate>
  );
};

export default SignUpScreen;
