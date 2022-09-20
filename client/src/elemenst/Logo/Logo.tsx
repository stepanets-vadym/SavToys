// React
import { Link } from 'react-router-dom';
// Components & elements
import Icon from '../icon/Icon';

// Style
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link to='/' className={styles.logo}>
      <div className={styles.logoIcon}>
        <Icon name={'Toys'} />
      </div>
      <div className={styles.logoText}>SavToys</div>
    </Link>
  );
}
