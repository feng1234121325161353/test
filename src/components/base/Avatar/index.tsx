import React from 'react';
import { User } from '@/types';
import styles from './Avatar.module.css';
import { classNames } from '@/utils';

interface AvatarProps {
  user: User;
  size?: 'small' | 'default' | 'large';
  className?: string;
}

/**
 * 头像组件
 */
export const Avatar: React.FC<AvatarProps> = ({ 
  user, 
  size = 'default',
  className 
}) => {
  return (
    <div 
      className={classNames(styles.avatar, styles[size], className)}
      title={user.name}
    >
      <img src={user.avatar} alt={user.name} />
    </div>
  );
};

interface AvatarGroupProps {
  users: User[];
  maxCount?: number;
  size?: 'small' | 'default' | 'large';
  className?: string;
}

/**
 * 头像组组件
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({ 
  users, 
  maxCount = 5,
  size = 'small',
  className 
}) => {
  const displayUsers = users.slice(0, maxCount);
  
  return (
    <div className={classNames(styles.avatarGroup, className)}>
      {displayUsers.map((user) => (
        <Avatar key={user.id} user={user} size={size} />
      ))}
      {users.length > maxCount && (
        <span className={styles.avatarText}>
          +{users.length - maxCount}
        </span>
      )}
    </div>
  );
};

