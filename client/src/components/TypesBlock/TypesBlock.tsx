// React
import classNames from 'classnames';
import { useEffect } from 'react';

// Components & elements
import { TypesItem } from 'elemenst/productTypeItem/TypesItem';
import { SkeletonTypesItem } from 'elemenst/productTypeItem/SkeletonTypesItem';

// Context

// Redux
import { useAppSelector } from 'hooks/redux';


// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './TypesBlock.module.scss';


export default function TypesBlock() {
  const { types, isLoading, error } = useAppSelector(
    (state) => state.typeReduser
  );

  
  return (
    <div className={styles.TypesBlock}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Широкий ассортимент товарів</h2>
          <h3 className={styles.subtitle}>для малюків та мам</h3>
        </div>
        <div className={styles.content}>
          {isLoading && <SkeletonTypesItem typesCount={12} />}
          {types?.map((type) => (
            <TypesItem key={`productType - ${type.id}`} productType={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
