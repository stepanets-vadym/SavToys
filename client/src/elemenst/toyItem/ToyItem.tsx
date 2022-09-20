// React
import classNames from 'classnames';

// Components & elements
import Icon from 'elemenst/icon/Icon';
import { FC } from 'react';
import { IProduct } from 'Types/Product.types';

// Styles
import styles from './ToyItem.module.scss';

interface Props {
  toy: IProduct;
}

export const ToyItem: FC<Props> = ({ toy }) => {
  return (
    <div className={styles.toyItem}>
      <div className={styles.imageBlock}>
        {toy.img.map((image) => (
          <img
            key={image}
            className={styles.image}
            src={`http://localhost:5000/${image}`}
            alt='img'
          />
        ))}
        <label className={styles.likeItem}>
          <input className={styles.input} type='checkbox' />
          <span className={styles.icon}>
            <Icon name={'heart'} />
          </span>
        </label>
        {toy.newProd ? (
          <div className={classNames(styles.newItem, styles.mark)}>new</div>
        ) : toy.bestseller ? (
          <div className={classNames(styles.bestItem, styles.mark)}>ХІТ</div>
        ) : toy.discount ? (
          <div
            className={classNames(styles.discountItem, styles.mark)}
          >{`-${toy.discount}%`}</div>
        ) : null}
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.priseBlock}>
          <div className={styles.discountPrice}>
            {toy.discount
              ? Math.round(toy.price - (toy.price / 100) * toy.discount)
              : toy.price}{' '}
            грн
          </div>
          {toy.discount ? (
            <div className={styles.correctPrice}>{toy.price} грн</div>
          ) : null}
        </div>
        <div className={styles.name}>{toy.name}</div>
        <div className={styles.deliveryBlock}>
          <div className={styles.deliveryIcon}>
            <Icon name={'Delivery'} />
          </div>
          <div className={styles.deliveryTerm}>Доставка: 1-2 дні</div>
        </div>
      </div>
    </div>
  );
};
