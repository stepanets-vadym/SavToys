// React

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './CatalogMenu.module.scss';

export default function CatalogMenu() {
  return (
    <div className={styles.CatalogMenu}>
      <div className={styles.menu}>
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
