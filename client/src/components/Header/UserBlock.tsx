// React
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './UserBlock.module.scss';
import ChoiceItem from '../../elemenst/choiceItem/ChoiceItem';

export default function UserBlock() {
  const [user, setUser] = useState(false);

  return (
    <div>
      <div className={styles.logBlock}>
        <div className={styles.userPhoto}>
          {user ? <img src={''} alt='userPhoto' /> : <Icon name='Person' />}
        </div>
        <div className={styles.log}>
          <Link to='/' className={styles.loginBtn}>
            Вхід
          </Link>
          <Link to='/' className={styles.registrationBtn}>
            Реєстрація
          </Link>
        </div>
        <div className={styles.choiceBlock}>
          <ChoiceItem name='Cart'  />
          <ChoiceItem name='heart' num={3} />
        </div>
      </div>
    </div>
  );
}
