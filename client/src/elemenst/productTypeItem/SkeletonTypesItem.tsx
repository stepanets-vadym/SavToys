import { FC } from 'react';
import Skeleton from 'react-loading-skeleton'

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './SkeletonTypesItem.module.scss';

interface Props {
  typesCount: number
}

export const SkeletonTypesItem:FC<Props> = ({typesCount}): any => {
  return Array(typesCount).fill(0).map((_, i) => (

    <div className={styles.type} key={i} >
      <div className={styles.icon}>
        <Skeleton circle width={75} height={80}/>
      </div>
      <div className={styles.text}>
        <Skeleton count={1}/>
      </div>
    </div>
    ))
  
}
