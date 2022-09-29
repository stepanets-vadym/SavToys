// React
import classNames from 'classnames';
// Components & elements
import Icon from 'elemenst/icon/Icon';
import { UserTab, userTabType } from 'Types/UserTab.types';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getUserTabType } from 'store/reducers/UserPageTab';

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './UserOrderBlock.module.scss';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from 'utils/consts';

export default function UserOrderBlock() {
  const { userTabTypes } = useAppSelector((state) => state.getUserTabType);

  const navigate = useNavigate();

  return (
    <div className={styles.UserOrderBlock}>
      <div className={styles.igmBlock}>
        <Icon name='unOrder' />
      </div>
      <h3 className={styles.title}>У вас поки не було замовлень</h3>
      <div className={styles.message}>
        Давайте це виправим! Зробіть свое перше замовлення у нашому магазині
        прямо зараз.
      </div>
      <button className={styles.openShop} onClick={() => navigate(SHOP_ROUTE)}>
        <span className={styles.icon}>
          <Icon name='arrow' />
        </span>
        <span>Переглянути каталог</span>
      </button>
    </div>
  );
}
