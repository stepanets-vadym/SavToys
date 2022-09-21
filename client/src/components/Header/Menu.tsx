// React
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { getTypeIdSlice } from 'store/reducers/GetTypeId';
// Hooks
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// Components & elements
import Icon from '../../elemenst/icon/Icon';
import { SHOP_ROUTE } from '../../utils/consts';

// Style
import styles from './Menu.module.scss';
import globalStyle from '../../styles/global/global.module.scss';
import { openMenuSlice } from 'store/reducers/OpenMenu';

interface Props {}

const Menu = () => {
  const { types } = useAppSelector((state) => state.typeReduser);
  const { openMenu } = useAppSelector((state) => state.openMenuReducer);

  const dispatch = useAppDispatch();

  const getItemValue = (e: { stopPropagation: () => void }, id: number) => {
    e.stopPropagation();
    dispatch(getTypeIdSlice.actions.getType(id));
    dispatch(openMenuSlice.actions.closeMenu());
  };

  return (
    <div
      className={
        openMenu ? classNames(styles.Menu, styles.openMenu) : styles.Menu
      }
      onClick={() => dispatch(openMenuSlice.actions.closeMenu())}
    >
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.content}>
          {types.map((type) => (
            <Link
              to={SHOP_ROUTE}
              onClick={(e) => getItemValue(e, type.id)}
              className={
                styles.menuItem
              }
              key={'type-' + type.id}
            >
              <span className={styles.icon}>
                {' '}
                <Icon name={type.menuIcon} />
              </span>
              <span className={styles.name}>{type.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
