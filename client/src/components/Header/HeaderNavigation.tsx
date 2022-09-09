// React
import classNames from 'classnames';

// Components & elements
import Icon from '../../elemenst/icon/Icon';
import Logo from '../../elemenst/Logo/Logo';
import Navigation from './Navigation';
import Connect from './Connect';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './HeaderNavigation.module.scss';

export default function HeaderNavigation() {
  return (
    <nav className={styles.navigation}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <Logo />
        <Navigation />
        <Connect />
      </div>
    </nav>
  );
}
