// React
import classNames from 'classnames';
import { useState, useEffect } from 'react';

// Servises
import { productAPI } from 'servises/ProductServise';

// Components & elements
import { sortType } from 'staticInfo/StaticInfo';
import SortBlock from 'components/Shop/SortBlock';
import { ToyItem } from 'elemenst/toyItem/ToyItem';
import SortByType from 'components/Shop/SortByType';
import Pagination from 'components/Shop/Pagination';
import PriceFilter from 'components/Shop/PriceFilter';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productSortByClick } from 'store/reducers/ProductsSort';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Shop.module.scss';
import Icon from 'elemenst/icon/Icon';
import SortByBrand from 'components/Shop/SortByBrand';

const Shop = () => {
  // скільки товарів на сторінці
  const [limit, setLimit] = useState<string>('5');
  // сортування по типу
  const [typeProd, setTypeProd] = useState<number | undefined>(undefined);
  const [brandId, setBrandId] = useState<number | undefined>(undefined);
  // стан відповідно якого сортується масив товарів
  const [sortTypes, setSortTypes] = useState<string>(sortType.UNSORT);
  // пагінація
  const [pageNum, setPageNum] = useState<number>(1);
  // значення фільтрацію за ціною
  const [min, setMin] = useState<number>(10);
  const [max, setMax] = useState<number>(20000);
  // запрос на всі товари
  const { data: products } = productAPI.useFetchAllProductsQuery({
    limit: limit,
    page: pageNum,
    typeId: typeProd !== undefined ? typeProd : undefined,
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
    if (products?.rows)
      dispatch(productSortByClick.actions.sortByPrice({ min: min, max: max }));
  }, [sortTypes, products, typeProd, min, max]);

  return (
    <div className={styles.shopPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.sideBar}>
          <SortByType setTypeProd={setTypeProd} />
          <SortByBrand
            setMax={setMax}
            setMin={setMin}
            setBrandId={setBrandId}
            max={max}
            min={min}
          />
        </div>

        <div className={styles.shopBlock}>
          <div className={styles.infoBlock}>
            <SortBlock setLimit={setLimit} setSortTypes={setSortTypes} />
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
