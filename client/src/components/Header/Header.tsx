// React
import classNames from 'classnames';

// Components & elements
import HeaderNavigation from './HeaderNavigation';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Header.module.scss';
import HeaderUserBlock from './HeaderUserBlock';

export default function Header() {
  return (
    <header className={styles.header}>
        <HeaderNavigation/>
        <HeaderUserBlock/>
    </header>
  )
}
