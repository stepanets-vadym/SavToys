// React
import classNames from 'classnames';
import { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchProductTypes } from 'store/reducers/ActionsCreator';
import { getTypeIdSlice } from 'store/reducers/GetTypeId';

// Components & elements
import Icon from 'elemenst/icon/Icon';

// Styles
import styles from './SortByType.module.scss';

const SortByType = () => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.typeReduser);
  const { typeId } = useAppSelector((state) => state.typeIdReducer);

  // запрос на всі типи
  useEffect(() => {
    dispatch(fetchProductTypes());
  }, []);

  return (
    <div className={styles.sortByType}>
      <div className={styles.catalogTitle}>
        <span className={styles.icon}>
          <Icon name={'Burger'} />
        </span>
        <span> Каталог товарів</span>
      </div>
      {types?.map((type) => (
        <div
          className={
            typeId === type.id
              ? classNames(styles.catalogItem, styles.activeItem)
              : styles.catalogItem
          }
          key={`type = ${type.id}`}
          onClick={() =>
            typeId === type.id
              ? dispatch(getTypeIdSlice.actions.getType(0))
              : dispatch(getTypeIdSlice.actions.getType(type.id))
          }
        >
          {type.name}
        </div>
      ))}
    </div>
  );
};

export default SortByType;
