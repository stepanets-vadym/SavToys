// React
import classNames from 'classnames';
import { ToyItem } from 'elemenst/toyItem/ToyItem';
import { productAPI } from 'servises/ProductServise';
// Context

// Components & elements

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Shop.module.scss';

const Shop = () => {
  const { data: products } = productAPI.useFetchAllProductsQuery(9);

  return (
    <div className={styles.shopPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.toysBlock}>
          {products?.rows.map((toy) => (
            <ToyItem key={`toy - ${toy.id}`} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
