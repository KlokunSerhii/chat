import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import {
  Div,
  Forma,
  Input,
  ButtonSubmit,
  Title,
  Label,
} from './Login.styled';
import { SignupSchemaLogin } from 'options/validForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

function Login() {
  const email = '';
  const password = '';
  const dispatch = useDispatch();

  const handleSubmitLogin = (
    { email, password },
    { resetForm }
  ) => {

    dispatch(login({ email, password }));
    resetForm();
  };
  return (
    <Div>
      <Title>Glad to see you again :)</Title>
      <Formik
        initialValues={{ email, password }}
        validationSchema={SignupSchemaLogin}
        onSubmit={handleSubmitLogin}
      >
        <Forma>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder='enter your email'
              autoComplete='off'
            />
            
            <MdOutlineEmail style={{ 
              marginLeft: "5px", 
              stroke:"0",
              fill:"#000000",    
              position: 'absolute',
              top: '14px',
              left: '10px',
 }}/>
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
              type="password"
              name="password"
              placeholder="enter your"
              autoComplete='off'
            />
            <RiLockPasswordFill
            style={{ 
              marginLeft: "5px", 
              stroke:"0",
              fill:"#000000",    
              position: 'absolute',
              top: '14px',
              left: '10px',
            }}
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

          <ButtonSubmit type="submit">LogIn</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Login;
