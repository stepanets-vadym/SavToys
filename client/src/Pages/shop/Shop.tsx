// React
import classNames from 'classnames';
import { useState, useEffect } from 'react';

// Servises
import { productAPI } from 'servises/ProductServise';

// Components & elements
import { sortType } from 'staticInfo/StaticInfo';
import { ToyItem } from 'elemenst/toyItem/ToyItem';
import Pagination from 'components/Shop/Pagination';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productSortByClick } from 'store/reducers/ProductsSort';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Shop.module.scss';
import SortBlock from 'components/Shop/SortBlock';
import SortByType from 'components/Shop/SortByType';

const Shop = () => {
  // скільки товарів на сторінці
  const [limit, setLimit] = useState<string>('5');
   // сортування по типу
   const [typeProd, setTypeProd] = useState<number>(0);
  // стан відповідно якого сортується масив товарів
  const [sortTypes, setSortTypes] = useState<string>(sortType.UNSORT);
  // пагінація
  const [pageNum, setPageNum] = useState<number>(1);
  // запрос на всі товари
  const { data: products } = productAPI.useFetchAllProductsQuery({
    limit: limit,
    page: pageNum,
    typeId: typeProd ? typeProd : 0
  });

  // сортований масив з редаксу
  const { productSort } = useAppSelector((state) => state.productSort);

  const dispatch = useAppDispatch();

  // загрузка сортованого масиву в базу редаксу
  useEffect(() => {
    if (products?.rows) {
      dispatch(productSortByClick.actions.getaAllProducts(products?.rows));
    }
  }, [products]);

  return (
    <div className={styles.shopPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.sideBar}>

          <SortByType/>
        </div>

        <div className={styles.shopBlock}>
          <div className={styles.infoBlock}>
            <SortBlock
              setLimit={setLimit}
              setSortTypes={setSortTypes}
              sortTypes={sortTypes}
            />
            <div className={styles.countBlock}>
              Знайдено {products?.count ? products.count : 0} товарів
            </div>
          </div>
          <div className={styles.toysBlock}>
            {productSort?.map((toy) => (
              <ToyItem key={`toy - ${toy.id}`} toy={toy} />
            ))}
          </div>
          <Pagination
            count={products?.count}
            limit={limit}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
