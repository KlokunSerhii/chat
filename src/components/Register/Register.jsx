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
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

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
      <Title>Hello, sign up</Title>
      <Formik
        initialValues={{ email, password }}
        validationSchema={SignupSchemaRegister}
        onSubmit={handleSubmitRegister}
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
              placeholder="enter your password"
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

          <ButtonSubmit type="submit">
          SignUp
          </ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Register;
