import {PostType} from '@/types/globals';
import styles from './PostCard.module.scss';
import Link from 'next/link';

export const PostCard = ({title, date, category, summary, url}: PostType) => {
  return (
    <div className={styles.PostCard}>
      <Link href={url}>
        <h3>{title}</h3>
      </Link>
      <div className={styles.meta}>
        <span>{date}</span>
        <span>|</span>
        <span>{category}</span>
      </div>
      <p>{summary}</p>
    </div>
  );
};
