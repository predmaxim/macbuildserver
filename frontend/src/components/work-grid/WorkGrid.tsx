import {WorkType} from '@/types/globals';
import styles from './WorkGrid.module.scss';
import {WorkCard} from '@/components';

type WorkGridProps = {
  works: WorkType[]
}

export const WorkGrid = ({works}: WorkGridProps) => {
  return (
    <div className={styles.WorkGrid}>
      {works.map((work) => <WorkCard {...work} key={work.id}/>)}
    </div>
  );
};
