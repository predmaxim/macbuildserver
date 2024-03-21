'use client';
import styles from './RegistrationForm.module.scss';
import {Button} from '@/components';
import {FormEvent, useState} from 'react';

export const RegistrationFrom = () => {
  const [status, setStatus] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => setStatus(true), 500);
  };

  return (
    <form className={styles.RegistrationForm} onSubmit={onSubmit}>
      <input
        type="email"
        className={`input`}
        autoFocus
        required
      />
      <input type="password" className={`input`}/>
      <Button type="submit">Register</Button>
      {status && <p>Fake registration successful</p>}
    </form>
  );
};
