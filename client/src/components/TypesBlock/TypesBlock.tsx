// React
import classNames from 'classnames'

// Components & elements
import TypesItem from './TypesItem';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './TypesBlock.module.scss';

export default function TypesBlock() {
  return (
    <div className={styles.CatalogMenu}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            Широкий ассортимент товарів
          </h2>
          <h3 className={styles.subtitle}>
            для малюків та мам
          </h3>
        </div>
        <div className={styles.content}>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
          <TypesItem/>
        </div>
      </div>
    </div>
  );
}
