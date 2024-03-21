'use client';
import styles from './LoginForm.module.scss';
import {Button} from '@/components';
import Link from 'next/link';
import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {FormAuthCredentialsSchema} from '@/libs/zod-schemas';
import {login, logout} from '@/redux/features/auth/userApi';

export const LoginForm = () => {
  const {isLogged, isLoading} = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();
  const [
    credentials,
    setCredentials
  ] = useState({email: '', password: '', remember: false});
  const [
    errors,
    setErrors
  ] = useState({email: '', password: ''});

  const clearErrors = () => setErrors({email: '', password: ''});

  const onChangeEmailFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const validate = FormAuthCredentialsSchema.shape.email
      .email()
      .safeParse(e.currentTarget.value);
    if (validate.success) {
      setCredentials({...credentials, email: e.currentTarget.value});
      clearErrors();
    } else {
      setErrors({...errors, email: validate.error.message});
    }
  };

  const onChangePasswordFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const validate = FormAuthCredentialsSchema.shape.email
      .min(4)
      .safeParse(e.currentTarget.value);

    if (validate.success) {
      setCredentials({...credentials, password: e.currentTarget.value});
      clearErrors();
    } else {
      setErrors({...errors, password: validate.error.message});
    }
  };

  const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({...credentials, remember: e.currentTarget.checked});
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogged) {
      dispatch(logout());
    } else {
      const validate = FormAuthCredentialsSchema.safeParse(credentials);
      if (validate.success) {
        dispatch(login(validate.data));
      } else {
        console.log('Form validation error');
      }
    }
  };

  return (
    <div className={styles.LoginForm}>
      <form
        className={styles.LoginForm__form}
        onSubmit={onSubmit}
      >
        {!isLogged &&
          <>
            <input
              type="email"
              className={`input`}
              name="email"
              onChange={onChangeEmailFieldHandler}
              autoFocus
              required
            />
            {errors?.email && <p className="error">Invalid email address</p>}
            <input
              type="password"
              className={`input`}
              name="password"
              onChange={onChangePasswordFieldHandler}
              required
            />
            {errors?.password && <p className="error">Password should be more 3</p>}
            <label>
              <input
                type="checkbox"
                name="remember"
                onChange={onChangeCheckbox}
              /> Remember me
            </label>
          </>
        }
        {!isLogged &&
          <p>You have no account? <Link href="/registration">Sign Up!</Link></p>
        }
        <Button type="submit">
          {isLogged
            ? 'Logout'
            : isLoading
              ? 'Loading...'
              : 'Sign In'}
        </Button>
      </form>
    </div>
  );
};
