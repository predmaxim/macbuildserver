'use client';
import styles from './Menu.module.scss';
import Link from 'next/link';
import {MenuItemType} from '@/types/globals';
import {PiListLight} from 'react-icons/pi';
import {Button} from '@/components';
import {useState} from 'react';

type MenuProps = {
  menuItems: MenuItemType[]
}

export const Menu = ({menuItems}: MenuProps) => {
  const [open, setOpen] = useState(false);


  const onClickMobileMenu = () => {
    setOpen(!open);
  };

  const onClickMobileMenuItem = () => {
    setOpen(false);
  };

  const Items = ({className}: { className: string }) => menuItems.map(({id, name, url}) => {
    return (
      <Link
        key={id}
        href={url}
        className={className}
        onClick={onClickMobileMenuItem}
      >
        {name}
      </Link>
    );
  });

  return (
    <>
      <div className={styles.Menu}>
        <Items className={styles.Menu__item}/>
      </div>
      <div className={styles.mobileMenu}>
        <Button
          btnType="link"
          onClick={onClickMobileMenu}
          className={styles.mobileMenu__btn}
        >
          <PiListLight/>
        </Button>
        {open &&
          <div className={styles.mobileMenu__menu}>
            <Items className={styles.mobileMenu__item}/>
          </div>
        }
      </div>
    </>
  );
};
