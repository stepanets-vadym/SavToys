// React
import classNames from 'classnames';

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// Redux
import { openMenuSlice } from 'store/reducers/OpenMenu';
import { getTypeIdSlice } from 'store/reducers/GetTypeId';
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Style
import styles from './CatalogMenu.module.scss';

export default function CatalogMenu() {
  const { openMenu } = useAppSelector((state) => state.openMenuReducer);

  const dispatch = useAppDispatch();

  const closeMenuFunc = () => {
    dispatch(getTypeIdSlice.actions.getType(0));

    openMenu
      ? dispatch(openMenuSlice.actions.closeMenu())
      : dispatch(openMenuSlice.actions.openMenu());
  };

  return (
    <div className={styles.CatalogMenu}>
      <div
        className={
          openMenu ? classNames(styles.menu, styles.openMenu) : styles.menu
        }
        onClick={() => closeMenuFunc()}
      >
        <div className={styles.burger}>
          <Icon name='Burger' />
        </div>
        <div>Каталог товарів</div>
      </div>

      <label className={styles.search}>
        <span className={styles.searchIcon}>
          <Icon name='Search' />
        </span>
        <input
          type={'text'}
          placeholder='Введіть запрос для пошуку'
          className={styles.input}
        />
        <button className={styles.searchBtn}>Знайти</button>
      </label>
    </div>
  );
}
