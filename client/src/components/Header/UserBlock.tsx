// React
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Components & elements
import {
  REGISTRATION_ROUTE,
  AUTHORIZATION_ROUTE,
  CART_ROUTE,
  USER_ROUTE,
  ADMIN_ROUTE,
} from 'utils/consts';
import ChoiceItem from '../../elemenst/choiceItem/ChoiceItem';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import Icon from '../../elemenst/icon/Icon';
import { getUserTabType } from 'store/reducers/UserPageTab';

// Style
import styles from './UserBlock.module.scss';
import { getUser } from 'store/reducers/GetUser';
import { userTabType } from 'Types/UserTab.types';
import PreCartWindow from './PreCartWindow';

export default function UserBlock() {
  const { user } = useAppSelector((state) => state.getUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Стан меню юзера
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openCartMenu, setOpenCartMenu] = useState<boolean>(false);

  // Функія розлогінення
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(getUser.actions.getUser(null));
  };

  const { likesProducts } = useAppSelector((state) => state.likesProducts);
  const { cartItems } = useAppSelector((state) => state.cartItemsArr);

  return (
    <div className={styles.logBlock}>
      {user?.firstName ? (
        <div
          className={styles.userInfoBlock}
          onMouseOver={() => setOpenMenu(true)}
          onMouseOut={() => setOpenMenu(false)}
        >
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
          <div
            className={
              openMenu
                ? classNames(styles.userMenu, styles.activeUserMenu)
                : styles.userMenu
            }
            onMouseOver={() => setOpenMenu(true)}
            onMouseOut={() => setOpenMenu(false)}
          >
            <button className={styles.logoutBtn} onClick={() => logout()}>
              <span className={styles.logoutIcon}>
                <Icon name='exit' />
              </span>
              <span className={styles.logoutText}>Вихід</span>
            </button>
            <button className={styles.logoutBtn} onClick={() => navigate(ADMIN_ROUTE)}>admin</button>
            <button
              className={styles.logoutBtn}
              onClick={() => (
                navigate('/user'),
                dispatch(
                  getUserTabType.actions.getType({
                    id: 1,
                    name: 'Мої замовлення',
                    icon: 'Cart',
                    type: userTabType.ORDERS,
                  })
                )
              )}
            >
              Особистий кабінет
            </button>
          </div>
        </div>
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
        <div
          className={styles.choiseItem}
          onClick={() => (
            navigate(USER_ROUTE),
            dispatch(
              getUserTabType.actions.getType({
                id: 2,
                name: 'Мої побажання',
                icon: 'heart',
                type: userTabType.DESIRE,
              })
            )
          )}
        >
          <ChoiceItem
            name='heart'
            num={likesProducts.length !== 0 ? likesProducts.length : null}
          />
        </div>
        <div
          className={styles.choiseItem}
          onClick={() => navigate(CART_ROUTE)}
          onMouseOver={() => setOpenCartMenu(true)}
          onMouseOut={() => setOpenCartMenu(false)}
        >
          <ChoiceItem
            name='Cart'
            num={cartItems.length !== 0 ? cartItems.length : null}
          />
          <PreCartWindow
            openCartMenu={openCartMenu}
            setOpenCartMenu={setOpenCartMenu}
          />
        </div>
      </div>
    </div>
  );
}
