// React
import classNames from 'classnames';
// Components & elements
import Icon from 'elemenst/icon/Icon';
import { UserTab, userTabType } from 'Types/UserTab.types';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './UserSideBar.module.scss';
import { getUserTabType } from 'store/reducers/UserPageTab';

const UserTabs: UserTab[] = [
  {
    id: 1,
    name: 'Мої замовлення',
    icon: 'Cart',
    type: userTabType.ORDERS,
  },
  {
    id: 2,
    name: 'Мої побажання',
    icon: 'heart',
    type: userTabType.DESIRE,
  },
  {
    id: 3,
    name: 'Акції та пропозиції',
    icon: 'Discount',
    type: userTabType.SALES,
  },
  {
    id: 4,
    name: 'Налаштування профілю',
    icon: 'Settings',
    type: userTabType.SETTINGS,
  },
];

export default function UserSideBar() {
  const { userTabTypes } = useAppSelector((state) => state.getUserTabType);
  const { user } = useAppSelector((state) => state.getUser);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.userSideBar}>
      <div className={styles.img}>
        <Icon name='Person' />
      </div>
      <div className={styles.username}>
        {user?.firstName
          ? `${user?.firstName} ${user?.lastName}`
          : "Тут могло бути ваше ім'я"}
      </div>
      <div className={styles.tabsBlock}>
        {UserTabs.map((tab) => (
          <div
            className={
              userTabTypes.id === tab.id
                ? classNames(styles.tab, styles.activeTab)
                : styles.tab
            }
            key={`tab - ${tab.id}`}
            onClick={() => dispatch(getUserTabType.actions.getType(tab))}
          >
            <span className={styles.tabIcon}>
              <Icon name={tab.icon} />
            </span>
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
