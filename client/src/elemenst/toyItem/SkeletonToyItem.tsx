import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

// Style
import styles from './SkeletonToyItem.module.scss';

interface Props {
  typesCount: number;
}

export const SkeletonToyItem: FC<Props> = ({ typesCount }): any => {
  return Array(typesCount)
    .fill(0)
    .map((_, i) => (
      <div className={styles.type} key={i}>
        <div className={styles.icon}>
          <Skeleton circle width={100} height={100} />
        </div>
        <div className={styles.text}>
          <Skeleton count={6} />
        </div>
      </div>
    ));
};
