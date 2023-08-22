import * as Yup from 'yup';

export const SignupSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your password'),

  email: Yup.string()
    .email('invalid email')
    .required('Please enter your email'),
});

export const SignupSchemaLogin = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your password'),

  email: Yup.string()
    .email('invalid email')
    .required('Please enter your email'),
});
