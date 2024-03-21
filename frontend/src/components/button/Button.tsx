import {IconType} from 'react-icons';
import {ComponentPropsWithoutRef, ElementType} from 'react';
import styles from './Button.module.scss';

type ButtonProps<T extends ElementType> = {
  icon?: IconType,
  btnType?: 'primary' | 'secondary' | 'link',
  size?: 'big' | 'small'
  tag?: T;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(
  {
    tag,
    children,
    icon: Icon,
    btnType = 'primary',
    size = 'big',
    className,
    ...otherProps
  }: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = tag || 'button';
  return (
    <Component className={`${styles[btnType]} ${styles[size]} ${className} button`} {...otherProps} >
      {Icon && <Icon/>} {children}
    </Component>
  );
};
