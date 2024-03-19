import {IconType} from 'react-icons';
import {ComponentPropsWithoutRef, ElementType} from 'react';
import styles from './Button.module.scss';

type ButtonProps<T extends ElementType> = {
  icon?: IconType,
  btnType?: 'primary' | 'secondary' | 'link',
  tag?: T;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(
  {
    tag,
    children,
    icon: Icon,
    btnType = 'primary',
    className,
    ...otherProps
  }: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = tag || 'button';
  return (
    <Component className={`${styles[btnType]} ${className} button`} {...otherProps} >
      {children} {Icon && <Icon/>}
    </Component>
  );
};
