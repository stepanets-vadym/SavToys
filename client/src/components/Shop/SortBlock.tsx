// React
import { FC, useEffect } from 'react';

// Comopents & elements
import CustomSelect from 'elemenst/select/Select';
import { LimitSelect, sortProd, sortType } from 'staticInfo/StaticInfo';

// Redux
import { useAppDispatch } from 'hooks/redux';
import { productAPI } from 'servises/ProductServise';
import { productSortByClick } from 'store/reducers/ProductsSort';

// Styles
import styles from './SortBlock.module.scss';

interface Props {
  setLimit: (value: string) => void;
  setSortTypes: (value: string) => void;
  sortTypes: string;
}

const SortBlock: FC<Props> = ({ setLimit, setSortTypes, sortTypes }) => {
  // запрос на всі товари
  const { data: products } = productAPI.useFetchAllProductsQuery({});

  const dispatch = useAppDispatch();

  // функція яка перевіряє тип сортування незалежно від зміни у масиві продуків
  const sortFunc = () => {
    switch (sortTypes) {
      case sortType.SORTBYBETS:
        return dispatch(productSortByClick.actions.sortByBestProduct());
      case sortType.SORTBYCHEAP:
        return dispatch(productSortByClick.actions.sortByСheapProductPrice());
      case sortType.SORTBYEXPENSIVE:
        return dispatch(
          productSortByClick.actions.sortByExpensiveProductPrice()
        );
      case sortType.SORTBYNEW:
        return dispatch(productSortByClick.actions.sortByNewProduct());
      case sortType.UNSORT:
        if (products?.rows)
          return dispatch(
            productSortByClick.actions.getaAllProducts(products?.rows)
          );
    }
  };

  useEffect(() => {
    sortFunc();
  }, [sortTypes, products]);

  return (
    <div className={styles.sortBlock}>
      <div className={styles.limitBlock}>
        <div className={styles.sortTitle}>Відобразити</div>
        <CustomSelect
          options={LimitSelect()}
          onChange={setLimit}
          defaultVal={'5'}
        />
      </div>
      <div className={styles.limitBlock}>
        <div className={styles.sortTitle}>Сортувати:</div>
        <CustomSelect
          options={sortProd()}
          onChange={setSortTypes}
          defaultVal={'Всі'}
        />
      </div>
    </div>
  );
};

export default SortBlock;
