'use client';

import {RegistrationFrom} from '@/components';
import styles from './RegistrationPage.module.scss';
import {useAppSelector} from '@/redux/hooks';
import {redirect} from 'next/navigation';

const RegistrationPage = () => {
  const {isLogged} = useAppSelector((state) => state.user.value);

  if (isLogged) {
    redirect('/');
  }

  return (
    <div className={styles.RegistrationPage}>
      <RegistrationFrom/>
    </div>
  );
};
export default RegistrationPage;
