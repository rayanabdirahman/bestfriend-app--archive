import * as Yup from 'yup';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password is too short - must be 8 characters minimum')
});
