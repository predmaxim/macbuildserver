import styles from './Header.module.scss';
import {Menu} from '@/components';
import headerMenu from '@/mocks/menu.json';
import {MenuItemType} from '@/types/globals';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__menu}>
        <Menu menuItems={headerMenu as unknown as MenuItemType[]}/>
      </div>
    </header>
  );
};
