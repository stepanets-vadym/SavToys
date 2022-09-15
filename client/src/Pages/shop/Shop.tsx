// React
import classNames from 'classnames';
import { useState } from 'react';

// Servises
import { productAPI } from 'servises/ProductServise';

// Components & elements
import { LimitSelect } from 'staticInfo/StaticInfo';
import { ToyItem } from 'elemenst/toyItem/ToyItem';
import Select from 'elemenst/select/Select';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Shop.module.scss';

const Shop = () => {
  const [limit, setLimit] = useState<string>('5');

  const { data: products } = productAPI.useFetchAllProductsQuery({
    limit: limit,
  });

  return (
    <div className={styles.shopPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.sideBar}>dasdasd</div>
        <div className={styles.shopBlock}>
          <div className={styles.infoBlock}>
            <div className={styles.limitBlock}>
              <div className={styles.sortTitle}>Відобразити</div>
              <Select options={LimitSelect()} onChange={setLimit} />
            </div>
          </div>
          <div className={styles.toysBlock}>
            {products?.rows.map((toy) => (
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
