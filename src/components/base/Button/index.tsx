import React from 'react';
import styles from './Button.module.css';
import { classNames } from '@/utils';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'default';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * 按钮组件
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[type],
        disabled && styles.disabled,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
}

/**
 * 图标按钮组件
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  title,
}) => {
  return (
    <button
      className={classNames(styles.iconButton, className)}
      onClick={onClick}
      title={title}
    >
      {icon}
    </button>
  );
};

