// React
import classNames from 'classnames';

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './TypesItem.module.scss';

export default function TypesItem() {
  return (
    <div className={styles.typesItem}>
      <div className={styles.icon}>
        <Icon name={'Bear'} />
      </div>
      <h3 className={styles.typesTitle}>Іграшки та ігри</h3>
    </div>
  );
}
