// React

import classNames from 'classnames';

// Components & elements
import UserDesireBlock from 'components/User/UserDesireBlock';
import UserOrderBlock from 'components/User/UserOrderBlock';
import UserSideBar from 'components/User/UserSideBar';
import { userTabType } from 'Types/UserTab.types';
import UserPropositionBlock from 'components/User/UserPropositionBlock';

// Redux
import { useAppSelector } from 'hooks/redux';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './UserPage.module.scss';

const UserPage = () => {
  const { userTabTypes } = useAppSelector((state) => state.getUserTabType);

  return (
    <div className={styles.UserPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <UserSideBar />
        {userTabTypes.type === userTabType.ORDERS && <UserOrderBlock />}
        {userTabTypes.type === userTabType.DESIRE && <UserDesireBlock />}
        {userTabTypes.type === userTabType.SALES && <UserPropositionBlock />}
      </div>
    </div>
  );
};

export default UserPage;
