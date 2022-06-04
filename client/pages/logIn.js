import React from 'react';
import { Form, Container,Button } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { login } from './api/loginManagemnet';
// import { setUserToken } from '../actions/login';
import {Input} from '../component/common/input';
import schema from '../schema/login';
// import {Button} from '../component/common/button'
import constants from '../constants/constants';

const Login = () => {
  const {
    title,
    buttons,
    emailPlaceholder,
    passwordPlaceholder,
  } = constants.loginPage;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center login-body">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="login-box">
          <div className="text-center">
          
            <h1 className="heading">{title}</h1>
            {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} */}
          </div>
          <Form >
          <Form.Group className="mb-6" controlId="formBasicEmail">
          <Input
              placeholder={emailPlaceholder}
              error={errors.email && errors.email.message}
              showError={true}
              registeredEvents={register('email')}
              // iconClass='fas fa-envelope'
              testID='email-input-login-screen'
              isLeftIcon={true}

            />
            <Input
             
              placeholder={passwordPlaceholder}
              error={errors.password && errors.password.message}
              showError={true}
              registeredEvents={register('pasword')}
              testID='password-input-login-screen'
              isPassword={true}
              isBothIcon={true}
            />
            <Button
            variant="primary" type="button">
          Sign In
            </Button>
            {/* <Button
                label={buttons.login}
                type='submit'
                isLeftIcon={true}
              /> */}
              {/* <button type='button'>Log In</button> */}
   </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
