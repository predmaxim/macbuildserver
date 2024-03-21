'use client';
import styles from './Header.module.scss';
import {Button, Menu} from '@/components';
import headerMenu from '@/mocks/menu.json';
import {useAppSelector} from '@/redux/hooks';
import {PiUserCircleFill} from 'react-icons/pi';
import Link from 'next/link';

export const Header = () => {
  const {email, isLogged} = useAppSelector((state) => state.user.value);
  return (
    <header className={styles.Header}>
      <div className={styles.Header__menu}>
        <Menu menuItems={headerMenu}/>
        {isLogged
          ? <Link
            href="/profile"
            className={styles.profileBtn}
          >
            <PiUserCircleFill/> {email.split('@')[0]}
          </Link>
          : <Button
            size="small"
            tag="a"
            href="/login"
            className={styles.signInBtn}
          >
            Sign In
          </Button>
        }

      </div>
    </header>
  );
};
