// React
import { FC } from 'react';

// Components & elements
import Icon from '../../elemenst/icon/Icon';
import { SHOP_ROUTE } from 'utils/consts';

// Redux
import { getTypeIdSlice } from 'store/reducers/GetTypeId';
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Style
import styles from './TypesItem.module.scss';

// Models
import { IType } from 'Types/ProductTypes.types';
import { Link } from 'react-router-dom';
import { openMenuSlice } from 'store/reducers/OpenMenu';

interface Props {
  productType: IType;
}

export const TypesItem: FC<Props> = ({ productType }) => {
  const dispatch = useAppDispatch();
  const { openMenu } = useAppSelector((state) => state.openMenuReducer);

  const closeMenuFunc = (id: number) => {
    dispatch(getTypeIdSlice.actions.getType(id));

    openMenu && dispatch(openMenuSlice.actions.closeMenu());
  };

  return (
    <Link
      to={SHOP_ROUTE}
      className={styles.typesItem}
      onClick={() => closeMenuFunc(productType.id)}
    >
      <div className={styles.icon}>
        <Icon name={productType.icon} />
      </div>
      <h3 className={styles.typesTitle}>{productType.name}</h3>
    </Link>
  );
};
