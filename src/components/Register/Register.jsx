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
import { AiOutlineUser } from 'react-icons/ai';

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
              placeholder='enter your name'
              autoComplete='off'
            />
            <AiOutlineUser style={{ 
              marginLeft: "5px", 
              stroke:"0",
              fill:"#000000",    
              position: 'absolute',
              top: '14px',
              left: '10px',
          }}/>
          </Label>

          <ErrorMessage
            name="name"
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
            <RiLockPasswordFill style={{ 
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

          <ButtonSubmit type="submit">SingUp</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Register;
