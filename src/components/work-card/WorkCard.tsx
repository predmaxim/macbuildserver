import {WorkType} from '@/types/globals';
import styles from './WorkCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const WorkCard = async ({title, year, img, category, summary, url}: WorkType) => {
  return (
    <div className={styles.WorkCard}>
      <Image
        src={img}
        alt={`Work ${title}`}
        className={styles.img}
        loading="lazy"
        width={246}
        height={180}
      />
      <Link href={url} className={styles.header}>
        <h3>{title}</h3>
      </Link>
      <div className={styles.meta}>
        <span className={styles.year}>{year}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <p className={styles.summary}>
        {summary}
      </p>
    </div>
  );
};
