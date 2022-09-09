// React
import { Link } from 'react-router-dom';

// Components & elements

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <ul className={styles.navList}>
      <Link to='/' className={styles.listItem}>
        Про нас
      </Link>
      <Link to='/' className={styles.listItem}>
        Оплата та доставка
      </Link>
      <Link to='/' className={styles.listItem}>
        Відгуки
      </Link>
      <Link to='/' className={styles.listItem}>
        FAQ
      </Link>
      <Link to='/' className={styles.listItem}>
        Блог
      </Link>
      <Link to='/' className={styles.listItem}>
        Контакти
      </Link>
    </ul>
  );
}
