import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { Button, Typography } from '../../components';
import { AuthStackParamList } from '../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../navigation/domain/enums';
import AuthFormTemplate from '../../components/templates/AuthFormTemplate';
import { TextInput } from 'react-native';
import useSignInFormInputs from './hooks/useSignInFormInputs';
import { Box, Input, VStack } from 'native-base';
import { SignInModel } from '../../domain/interfaces/account';
import { SignInValidationSchema } from '../../validation/account';

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_IN_FORM
>;

const SignInFormScreen: React.FC<Props> = ({ navigation }) => {
  const emailInputRef = React.useRef<TextInput>();
  const passwordInputRef = React.useRef<TextInput>();
  const { handleSignIn, initialValues, isLoading } = useSignInFormInputs();

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  return (
    <AuthFormTemplate
      title="Welcome back!"
      subTitle="Enter your credentials to continue"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={SignInValidationSchema}
        onSubmit={(values: SignInModel) => {
          console.log(values);
          handleSignIn(values);
        }}
      >
        {(formik) => (
          <VStack space="2xl" w="100%">
            <Box>
              <Input
                ref={emailInputRef}
                value={formik.values.email}
                type="email"
                placeholder="Email"
                variant="underlined"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              {formik.errors.email && (
                <Typography.FeedbackText type="error">
                  {formik.errors.email}
                </Typography.FeedbackText>
              )}
            </Box>

            <Box>
              <Input
                ref={passwordInputRef}
                value={formik.values.password}
                type="password"
                placeholder="Password"
                variant="underlined"
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
              />
              {formik.errors.password && (
                <Typography.FeedbackText type="error">
                  {formik.errors.password}
                </Typography.FeedbackText>
              )}
            </Box>

            <Button
              onPress={() => formik.handleSubmit()}
              type="primary"
              block
              disabled={
                isLoading || !formik.isValid || !formik.dirty ? true : false
              }
              isLoading={isLoading}
            >
              Sign in
            </Button>
          </VStack>
        )}
      </Formik>
    </AuthFormTemplate>
  );
};

export default SignInFormScreen;
