// React
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Components & elements
import ChoiceItem from '../../elemenst/choiceItem/ChoiceItem';
import Icon from '../../elemenst/icon/Icon';
import { REGISTRATION_ROUTE, AUTHORIZATION_ROUTE } from 'utils/consts';

// Style
import styles from './UserBlock.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getUser } from 'store/reducers/GetUser';

export default function UserBlock() {
  const { user } = useAppSelector((state) => state.getUser);
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(getUser.actions.getUser(null));

  };
  return (
    <div className={styles.logBlock}>
      {user?.firstName ? (
        <>
          {user.img ? (
            <div className={styles.personImg}>
              <img src={`http://localhost:5000/${user.img}`} alt='userPhoto' />
            </div>
          ) : (
            <div className={styles.personIcon}>
              <Icon name='Person' />
            </div>
          )}
          <div className={styles.userInfo}>
            <span className={styles.personName}>{user.firstName}</span>
            <span className={styles.personName}>{user.lastName}</span>
          </div>
          <button onClick={()=> logout()}>logout</button>
        </>
      ) : (
        <>
          <div className={styles.personIcon}>
            <Icon name='Person' />
          </div>
          <div className={styles.log}>
            <Link
              to={AUTHORIZATION_ROUTE}
              className={classNames(styles.loginBtn, styles.logBtn)}
            >
              Вхід
            </Link>
            <Link
              to={REGISTRATION_ROUTE}
              className={classNames(styles.registrationBtn, styles.logBtn)}
            >
              Реєстрація
            </Link>
          </div>
        </>
      )}

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
