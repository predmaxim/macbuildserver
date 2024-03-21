'use client';
import styles from './ProfilePage.module.scss';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {redirect} from 'next/navigation';
import {Button} from '@/components';
import {logout} from '@/redux/features/auth/userApi';

const ProfilePage = () => {
  const {isLogged, email} = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  if (!isLogged) {
    redirect('/');
  }

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <section className={styles.ProfilePage}>
      <h1>{email.split('@')[0]}</h1>
      {isLogged &&
        <Button type="submit" onClick={onLogout}>
          Logout
        </Button>}
    </section>
  );
};
export default ProfilePage;
