import React from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { login } from '../api/loginManagemnet';
// import { setUserToken } from '../actions/login';
import { Input } from '../component/common/input';
import schema from '../schema/login';
import Button from '../component/common/button'
import constants from '../constants/constants';
import { showToast, useStateCallback } from '../utility';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../action/loginAction';
import CustomButton from '../component/common/button';

const Login = () => {
  const {
    title,
    buttons,
    emailPlaceholder,
    passwordPlaceholder,
  } = constants.loginPage;


  const [state, setState] = useStateCallback({
    isLoading: false,
    errorMessage: '',
  });
  const { isLoading, errorMessage } = state;
  const dispatch = useDispatch();

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
  const onSubmit = (data) => {
    const bodyData = {
      user: {
        email: data.email,
        password: data.password,
      }
    }

    setState(
      (state) => ({ ...state, isLoading: true }),
      () => {
        dispatch(setUserToken(bodyData))
          .then((res) => {
            setState((state) => ({
              ...state,
              isLoading: false,
              errorMessage: res.data.error_message || '',
            }));
          })
          .catch((error) => {
            showToast(error?.response?.data?.error)
            setState((state) => ({ ...state, isLoading: false }));
          });
      },
    );
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center login-body">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="login-box">
          <div className="text-center">

            <h1 className="heading">{title}</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </div>
          <Form >
            <Form.Group className="mb-6" controlId="formBasicEmail" onSubmit={handleSubmit(onsubmit)}>
              <Input
                placeholder={emailPlaceholder}
                error={errors.email && errors.email.message}
                showError={true}
                registeredEvents={register('email')}
                // iconClass='fas fa-envelope'
                testID='email-input-login-screen'
                isLeftIcon={true}
                controlId="formEmail"

              />
              <Input
                controlId="formPassword"
                type={'password'}
                placeholder={passwordPlaceholder}
                error={errors.password && errors.password.message}
                showError={true}
                registeredEvents={register('password')}
                testID='password-input-login-screen'
                isPassword={true}
                isBothIcon={true}
              />
              <div className="text-center">
                <CustomButton
                  disabled={isLoading}
                  isLoading={isLoading}
                  label={buttons.login}
                  onClick={handleSubmit(onSubmit)}
                  type="submit"
                  isLeftIcon={true}
                  testID="login-button-login-screen"
                />
              </div>
              {/* <button type='button'>Log In</button> */}
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
