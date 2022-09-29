// React
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

// Components & elements
import { CART_ROUTE } from 'utils/consts';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Style
import styles from './PreCartWindow.module.scss';

export default function PreCartWindow() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartItems } = useAppSelector((state) => state.cartItemsArr);

  return (
    <div className={styles.preCartWindow}>
      <h3 className={styles.title}>
        {cartItems.length != 0
          ? `В вашій корзині ${cartItems.length} товари`
          : 'Ваша корзина пуста'}
      </h3>
      {cartItems?.map((toy) => (
        <div className={styles.preCartItem} key={`preCartItem - ${toy.id}`}>
          <div className={styles.preCartImg}>
            <img
              className={styles.image}
              src={`http://localhost:5000/${toy.img}`}
              alt='img'
            />
          </div>
          <div className={styles.name}>{toy.name}</div>
        </div>
      ))}
      <div className={styles.preCartFooter}>
        <button
          className={styles.preCartBtn}
          onClick={() => navigate(CART_ROUTE)}
        >
          Перейти в корзину
        </button>
      </div>
    </div>
  );
}
