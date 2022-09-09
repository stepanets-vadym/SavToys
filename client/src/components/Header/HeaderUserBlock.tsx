// React
import classNames from 'classnames'
// Components & elements
import CatalogMenu from './CatalogMenu';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './HeaderUserBlock.module.scss';
import UserBlock from './UserBlock';

export default function HeaderUserBlock() {
  return (
    <div className={styles.HeaderUserBlock}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <CatalogMenu/>
        <UserBlock/>
      </div>
    </div>
  )
}
