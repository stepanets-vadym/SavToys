// React
import { FC } from 'react';
import { IProduct } from 'Types/Product.types';

// Redux
import { cartItemsArr } from 'store/reducers/Cart';
import { useAppDispatch } from 'hooks/redux';

// Components & Elements
import Icon from 'elemenst/icon/Icon';

// Styles
import styles from './CartItem.module.scss';

interface Props {
  toy: IProduct;
}

const CartItem: FC<Props> = ({ toy }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.toyItem}>
      <div className={styles.toyImage}>
        <img
          className={styles.image}
          src={`http://localhost:5000/${toy.img}`}
          alt='img'
        />
      </div>
      <div className={styles.name}>{toy.name}</div>
      <div className={styles.price}>
        {toy.discount
          ? Math.round(toy.price - (toy.price / 100) * toy.discount)
          : toy.price}
        грн
      </div>
      <button
        className={styles.cancelBtn}
        onClick={() => dispatch(cartItemsArr.actions.remuveCartProduct(toy))}
      >
        <Icon name='bin' />
      </button>
    </div>
  );
};

export default CartItem;
