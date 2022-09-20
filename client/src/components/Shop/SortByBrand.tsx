// React
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

// Components & elements
import Icon from 'elemenst/icon/Icon';
import PriceFilter from './PriceFilter';
import { fetchBrands } from 'store/reducers/ActionsCreator';

// Hooks
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Styles
import styles from './SortByBrand.module.scss';

interface Props {
  setBrandId: (value: number | undefined) => void;
  setMax: (value: number) => void;
  setMin: (value: number) => void;
  max: number;
  min: number;
}

const SortByBrand: FC<Props> = ({ setBrandId, setMax, setMin, max, min }) => {
  const dispatch = useAppDispatch();
  // Стейт брендів
  const { brands } = useAppSelector((state) => state.brandReducer);

  // виділення активного фільтру
  const [active, setActive] = useState<number | undefined>(0);

  const setValue = (num: number | undefined) => {
    setBrandId(num);
    setActive(num);
  };

  // запрос на всі типи
  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div className={styles.sortByBrand}>
      <div className={styles.catalogTitle} onClick={() => setValue(undefined)}>
        <span className={styles.icon}>
          <Icon name={'filter'} />
        </span>
        <span> Фільтри</span>
      </div>

      <div className={styles.price}>
        <PriceFilter min={min} max={max} setMax={setMax} setMin={setMin} />
      </div>

      {brands?.map((brand) => (
        <div
          className={
            active === brand.id
              ? classNames(styles.catalogItem, styles.activeItem)
              : styles.catalogItem
          }
          key={`brand = ${brand.id}`}
          onClick={() => setValue(brand.id)}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
};

export default SortByBrand;
