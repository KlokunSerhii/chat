import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import {
  Div,
  Forma,
  Input,
  ButtonSubmit,
  Title,
  Label,
  IconEmail,
  IconPassword,
  IconUser,
  ErrorMessageDiv,
} from './Register.styled';
import { SignupSchemaRegister } from '../../options/validForm';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

function Register() {
  const email = '';
  const password = '';
  const name = '';
  const dispatch = useDispatch();

  const handleSubmitR = (
    { email, password, name },
    { resetForm }
  ) => {
    dispatch(register({ email, password, name }));
    resetForm();
  };

  return (
    <Div>
      <Title>Hello, sign up</Title>
      <Formik
        initialValues={{ email, password, name }}
        validationSchema={SignupSchemaRegister}
        onSubmit={handleSubmitR}
      >
        <Forma>
          <Label>
            <Input
              type="text"
              name="name"
              placeholder="enter your name"
              autoComplete="off"
            />
            <IconUser />
          </Label>

          <ErrorMessage
            name="name"
            render={() => (
              <ErrorMessageDiv>
                {'Please enter your email'}
              </ErrorMessageDiv>
            )}
          />
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="enter your email"
              autoComplete="off"
            />
            <IconEmail />
          </Label>

          <ErrorMessage
            name="email"
            render={() => (
              <ErrorMessageDiv>
                {'Please enter your email'}
              </ErrorMessageDiv>
            )}
          />

          <Label>
            <Input
              type="password"
              name="password"
              placeholder="enter your"
              autoComplete="off"
            />
            <IconPassword />
          </Label>

          <ErrorMessage
            name="password"
            render={() => (
              <ErrorMessageDiv>
                {'Please enter your password'}
              </ErrorMessageDiv>
            )}
          />

          <ButtonSubmit type="submit">SingUp</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Register;
