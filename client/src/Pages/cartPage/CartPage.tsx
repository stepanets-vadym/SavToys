// React
import classNames from 'classnames';
import CartItem from 'components/Cart/CartItem';
import Icon from 'elemenst/icon/Icon';
import { useAppSelector } from 'hooks/redux';
import { useState, useEffect } from 'react';
import { IProduct } from 'Types/Product.types';

// Components & elements

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './CartPage.module.scss';

const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.cartItemsArr);
  const [sum, setSum] = useState<number>(0);

  const sumPrice = (arr: IProduct[]) => {
    let fullPrice = 0;
    for (let index = 0; index < arr.length; index++) {
      
        (fullPrice += arr[index].discount
          ? Math.round(
              arr[index].price - (arr[index].price / 100) * arr[index].discount
            )
          : arr[index].price)
      
    }
    return fullPrice
  };

  useEffect(()=> {
    setSum( sumPrice(cartItems))
  },[cartItems])

  return (
    // Cart
    <div className={styles.cartBlock}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <h2 className={styles.title}>Корзна користувача</h2>
        <div className={styles.itemsBlock}>
          {cartItems.map((toy) => (
           <CartItem toy={toy} key={`cartItem - ${toy.id}`}/>
          ))}
        </div>
        <div className={styles.sumBlock}>Ваша сумма замовлення: {sum}грн</div>
      </div>
    </div>
  );
};

export default CartPage;
