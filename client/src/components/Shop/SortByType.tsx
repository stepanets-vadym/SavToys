import Icon from 'elemenst/icon/Icon';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect } from 'react';
import { fetchProductTypes } from 'store/reducers/ActionsCreator';

// Styles
import styles from './SortByType.module.scss';

const SortByType = () => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.typeReduser);

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
          className={styles.catalogItem}
          key={`type = ${type.id}`}
          onClick={() => console.log(type.id)}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
};

export default SortByType;
