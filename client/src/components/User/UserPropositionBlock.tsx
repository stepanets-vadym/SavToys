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
import styles from './UserPropositionBlock.module.scss';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from 'utils/consts';

export default function UserPropositionBlock() {
  const { userTabTypes } = useAppSelector((state) => state.getUserTabType);

  const navigate = useNavigate();

  return (
    <div className={styles.UserPropositionBlock}>
      <div className={styles.igmBlock}>
        <Icon name='Discount' />
      </div>
      <h3 className={styles.title}>Ми готуємо пропозиції</h3>
      <div className={styles.message}>
        <span> Вони з'являться в найближчий час! </span>
        <span>
          Підписуйтесь на нашу розсилку, щоб першими отримувати інформацію про
          Акції
        </span>
      </div>
      <label className={styles.email}>
        <input
          type='email'
          className={styles.input}
          placeholder='Ваша електронна адреса'
        />
      </label>
      <button className={styles.openShop} onClick={() => navigate(SHOP_ROUTE)}>
        <span className={styles.icon}>
          <Icon name='arrow' />
        </span>
        <span>Переглянути каталог</span>
      </button>
    </div>
  );
}
