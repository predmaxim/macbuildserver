'use client';
import {LoginForm} from '@/components';
import styles from './LoginPage.module.scss';
import {useAppSelector} from '@/redux/hooks';
import Link from 'next/link';
import {redirect} from 'next/navigation';

const LoginPage = () => {
  const {isLogged, email} = useAppSelector((state) => state.user.value);

  if (isLogged) {
    redirect('/');
  }

  return (
    <div className={styles.LoginPage}>
      {isLogged && <span>Logged as <Link href="/profile">{email.split('@')[0]}</Link></span>}
      <LoginForm/>
    </div>
  );
};
export default LoginPage;
