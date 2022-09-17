// React
import classNames from 'classnames';
import { useState, useEffect } from 'react';

// Servises
import { productAPI } from 'servises/ProductServise';

// Components & elements
import { LimitSelect } from 'staticInfo/StaticInfo';
import { ToyItem } from 'elemenst/toyItem/ToyItem';
import CustomSelect from 'elemenst/select/Select';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Shop.module.scss';
import { productSortByClick } from 'store/reducers/ProductsSort';

const Shop = () => {
  const [limit, setLimit] = useState<string>('5');

  const { data: products } = productAPI.useFetchAllProductsQuery({
    limit: limit,
  });

  const { productSort } = useAppSelector((state) => state.productSort);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products?.rows) {
      dispatch(productSortByClick.actions.getaAllProducts(products?.rows));
    }
  }, [products]);

  console.log(products?.rows);

  return (
    <div className={styles.shopPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.sideBar}>
          <button
            onClick={() =>
              dispatch(productSortByClick.actions.sortByNewProduct())
            }
          >
            {' '}
            новые{' '}
          </button>
          <button
            onClick={() =>
              dispatch(productSortByClick.actions.sortByBestProduct())
            }
          >
            {' '}
            популярные{' '}
          </button>
          <button
            onClick={() =>
              dispatch(productSortByClick.actions.sortByСheapProductPrice())
            }
          >
            {' '}
            от дешевых{' '}
          </button>
          <button
            onClick={() =>
              dispatch(productSortByClick.actions.sortByExpensiveProductPrice())
            }
          >
            {' '}
            от дорогих{' '}
          </button>
        </div>

        <div className={styles.shopBlock}>
          <div className={styles.infoBlock}>
            <div className={styles.limitBlock}>
              <div className={styles.sortTitle}>Відобразити</div>
              <CustomSelect
                options={LimitSelect()}
                onChange={setLimit}
                value={limit}
              />
            </div>
          </div>
          <div className={styles.toysBlock}>
            {productSort?.map((toy) => (
              <ToyItem key={`toy - ${toy.id}`} toy={toy} />
            ))}
          </div>
          <div className={styles.pagination}></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
