// React
import classNames from 'classnames';
import { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components & elements
import { CART_ROUTE } from 'utils/consts';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Style
import styles from './PreCartWindow.module.scss';
import Icon from 'elemenst/icon/Icon';
import { cartItemsArr } from 'store/reducers/Cart';

interface Props {
  openCartMenu: boolean;
  setOpenCartMenu: (value: boolean) => void;
}

const PreCartWindow: FC<Props> = ({ setOpenCartMenu, openCartMenu }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cartItems } = useAppSelector((state) => state.cartItemsArr);

  return (
    <div
      className={
        openCartMenu
          ? classNames(styles.preCartWindow, styles.activePreCartWindow)
          : styles.preCartWindow
      }
      onClick={(e)=> e.stopPropagation()}
      onMouseOver={() => setOpenCartMenu(true)}
      onMouseOut={() => setOpenCartMenu(false)}
    >
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
          <button className={styles.cancelBtn} onClick={()=>dispatch(cartItemsArr.actions.remuveCartProduct(toy))} >
            <Icon name='cross' />
          </button>
        </div>
      ))}
      {cartItems.length != 0 && (
        <div className={styles.preCartFooter}>
          <button
            className={styles.preCartBtn}
            onClick={() => navigate(CART_ROUTE)}
          >
            Перейти в корзину
          </button>
        </div>
      )}
    </div>
  );
};

export default PreCartWindow;
