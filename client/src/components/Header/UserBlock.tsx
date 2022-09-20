// React
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Components & elements
import ChoiceItem from '../../elemenst/choiceItem/ChoiceItem';
import Icon from '../../elemenst/icon/Icon';

// Style
import styles from './UserBlock.module.scss';

export default function UserBlock() {
  const [user, setUser] = useState(false);

  return (
    <div className={styles.logBlock}>
      {user ? (
        <div className={styles.personImg}>
          <img
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
            alt='userPhoto'
          />{' '}
        </div>
      ) : (
        <div className={styles.personIcon}>
          <Icon name='Person' />
        </div>
      )}

      <div className={styles.log}>
        <Link to='/' className={classNames(styles.loginBtn, styles.logBtn)}>
          Вхід
        </Link>
        <Link
          to='/'
          className={classNames(styles.registrationBtn, styles.logBtn)}
        >
          Реєстрація
        </Link>
      </div>
      <div className={styles.choiceBlock}>
        <div className={styles.choiseItem}>
          <ChoiceItem name='heart' num={3} />
        </div>
        <div className={styles.choiseItem}>
          <ChoiceItem name='Cart' />
        </div>
      </div>
    </div>
  );
}
