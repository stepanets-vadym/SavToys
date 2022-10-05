// React
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// Components & elements
import Icon from 'elemenst/icon/Icon';
import { UserTab, userTabType } from 'Types/UserTab.types';
import { ToyItem } from 'elemenst/toyItem/ToyItem';
import { SHOP_ROUTE } from 'utils/consts';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { likesProductsArr } from 'store/reducers/LikeProducts';

// Style

import styles from './UserDesireBlock.module.scss';

export default function UserDesireBlock() {
  const { likesProducts } = useAppSelector((state) => state.likesProducts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return (
    <div className={styles.UserDesireBlock}>
      {likesProducts.length === 0 ? (
        <div className={styles.unToyBlock}>
          <div className={styles.igmBlock}>
            <div className={classNames(styles.topLeft, styles.heart)}>
              <Icon name='questionHeart' />
            </div>
            <div className={classNames(styles.topRight, styles.heart)}>
              <Icon name='questionHeart' />
            </div>
            <div className={classNames(styles.bottomLeft, styles.heart)}>
              <Icon name='questionHeart' />
            </div>
            <div className={classNames(styles.bottomRight, styles.heart)}>
              <Icon name='questionHeart' />
            </div>
          </div>
          <h3 className={styles.title}>У вас поки не було побажань</h3>
          <div className={styles.message}>
            Саме час це виправить і створить перший список з широкго
            ассортименту наших товарів.
          </div>
          <button
            className={styles.openShop}
            onClick={() => navigate(SHOP_ROUTE)}
          >
            <span className={styles.icon}>
              <Icon name='arrow' />
            </span>
            <span>Переглянути каталог</span>
          </button>
        </div>
      ) : (
        <div className={styles.justBlock}>
          <h2 className={styles.titleTwo}>Список моїх побажань</h2>
          <div className={styles.toysBlock}>
            {likesProducts?.map((toy) => (
              <ToyItem key={`toy - ${toy.id}`} toy={toy} buyBtn={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
