// React
import classNames from 'classnames';

// Components & elements
import ConnectItem from 'elemenst/connectItem/ConnectItem';
import Icon from '../../elemenst/icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ContactBlock.module.scss';

const ContactBlock = () => {
  return (
    <div className={styles.ContactBlock}>
      <h2 className={styles.title}>Контакти</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          {' '}
          <ConnectItem iconName='Shape' data='+3809595955' />
        </li>
        <li className={classNames(styles.networkBlock, styles.listItem)}>
          <a target={'_blank'} href='/' className={styles.networkLink}>
            <Icon name='instagram'></Icon>
          </a>
          <a target={'_blank'} href='/' className={styles.networkLink}>
            <Icon name='instagram'></Icon>
          </a>
        </li>
        <li className={styles.listItem}>
          <ConnectItem
            iconName='Mail'
            data='SavToys@gmail.com'
            href='mailto:stepanetsv43@gmail.com'
          />
        </li>
        <li className={styles.listItem}>
          <ConnectItem iconName='wach' data='Пн-Пт: 9:00 - 17:00' />
        </li>
      </ul>
    </div>
  );
};

export default ContactBlock;
