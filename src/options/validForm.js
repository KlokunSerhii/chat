import * as Yup from 'yup';

export const SignupSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email')
    .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Enter valid email'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
      'Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol'
    )
    .required('Please enter your password'),
});

export const SignupSchemaLogin = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address')
  .required('Please enter your email')
  .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Enter valid email'),
password: Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
    'Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol'
  )
  .required('Please enter your password'),
});
