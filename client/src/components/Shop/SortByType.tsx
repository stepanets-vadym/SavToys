import classNames from 'classnames';
import Icon from 'elemenst/icon/Icon';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useEffect, useState } from 'react';
import { fetchProductTypes } from 'store/reducers/ActionsCreator';

// Styles
import styles from './SortByType.module.scss';

interface Props {
  setTypeProd: (value: number | undefined) => void;
}

const SortByType: FC<Props> = ({ setTypeProd }) => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.typeReduser);

  const [active, setActive] = useState<number | undefined>(0);

  const setValue = (num: number | undefined) => {
    setTypeProd(num);
    setActive(num);
  };

  // запрос на всі типи
  useEffect(() => {
    dispatch(fetchProductTypes());
  }, []);

  return (
    <div className={styles.sortByType}>
      <div
        className={styles.catalogTitle}
        onClick={() => setValue(undefined)}
      >
        <span className={styles.icon}>
          <Icon name={'Burger'} />
        </span>
        <span> Каталог товарів</span>
      </div>
      {types?.map((type) => (
        <div
          className={
            active === type.id
              ? classNames(styles.catalogItem, styles.activeItem)
              : styles.catalogItem
          }
          key={`type = ${type.id}`}
          onClick={() => setValue(type.id)}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
};

export default SortByType;
