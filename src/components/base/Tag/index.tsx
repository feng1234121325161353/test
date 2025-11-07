import React from 'react';
import { Tag as TagType } from '@/types';
import styles from './Tag.module.css';
import { classNames } from '@/utils';

interface TagProps {
  tag: TagType;
  className?: string;
}

/**
 * 标签组件
 */
export const Tag: React.FC<TagProps> = ({ tag, className }) => {
  return (
    <span className={classNames(styles.tag, styles[tag.color], className)}>
      {tag.label}
    </span>
  );
};

interface TagGroupProps {
  tags: TagType[];
  className?: string;
}

/**
 * 标签组组件
 */
export const TagGroup: React.FC<TagGroupProps> = ({ tags, className }) => {
  return (
    <div className={classNames(styles.tagGroup, className)}>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

