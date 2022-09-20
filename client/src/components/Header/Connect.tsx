// React

// Components & elements
import ConnectItem from 'elemenst/connectItem/ConnectItem';

// Style

import styles from './Connect.module.scss';

export default function Connect() {
  return (
    <div className={styles.connectBlock}>
      <ConnectItem iconName='Shape' data='+3809595955' />
      <ConnectItem
        iconName='Mail'
        data='SavToys@gmail.com'
        href='mailto:stepanetsv43@gmail.com'
      />
    </div>
  );
}
