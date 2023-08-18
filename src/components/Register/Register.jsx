import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import {
  Div,
  Forma,
  Input,
  ButtonSubmit,
  Title,
  Label,
} from './Register.styled';
import { SignupSchemaRegister } from 'options/validForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

function Register() {
  const email = '';
  const password = '';

  const dispatch = useDispatch();

  const handleSubmitRegister = (
    { email, password },
    { resetForm }
  ) => {
    dispatch(register({ email, password }));
    resetForm();
  };

  return (
    <Div>
      <Title>Hello, let's get to know each other</Title>
      <Formik
        initialValues={{ email, password }}
        validationSchema={SignupSchemaRegister}
        onSubmit={handleSubmitRegister}
      >
        <Forma>
          <Label>
            <Input
              name="email"
              type="email"
              placeholder="email"
            />
          </Label>
          <ErrorMessage
            name="email"
            render={() => (
              <div
                style={{
                  color: '#f0f0f0',
                  fontSize: '24px',
                }}
              >
                {'Please enter your email'}
              </div>
            )}
          />
          <Label>
            <Input
              type="text"
              name="password"
              placeholder="password"
            />
          </Label>
          <ErrorMessage
            name="password"
            render={() => (
              <div
                style={{
                  color: '#f0f0f0',
                  fontSize: '24px',
                }}
              >
                {'Please enter your password'}
              </div>
            )}
          />
          <ButtonSubmit type="submit">
            Register
          </ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Register;
