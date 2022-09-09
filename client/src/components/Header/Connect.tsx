// React

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Connect.module.scss';

export default function Connect() {
  return (
    <div className={styles.connectBlock}>
        <a href='/' target='_blan' className={styles.connectLink}>
          <span className={styles.connectIcon}>
            <Icon name='Shape' />
          </span>
          <span className={styles.connectInfo}>+3809595955</span>
        </a>
        <a href='/' target='_blan' className={styles.connectLink}>
          <span className={styles.connectIcon}>
            <Icon name='Mail' />
          </span>
          <span className={styles.connectInfo}>SavToys@gmail.com</span>
        </a>
     </div>
  )
}
