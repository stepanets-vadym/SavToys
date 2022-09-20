// React
import { FC } from 'react';

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// Style
import styles from './TypesItem.module.scss';

// Models
import { IType } from 'Types/ProductTypes.types';

interface Props {
  productType: IType;
}

export const TypesItem: FC<Props> = ({ productType }) => {
  return (
    <div className={styles.typesItem}>
      <div className={styles.icon}>
        <Icon name={productType.icon} />
      </div>
      <h3 className={styles.typesTitle}>{productType.name}</h3>
    </div>
  );
};
