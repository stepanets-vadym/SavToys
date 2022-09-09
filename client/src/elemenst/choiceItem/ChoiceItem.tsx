// React
import classNames from 'classnames';
import { FC } from 'react';

// Components & elements
import Icon from '../icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ChoiceItem.module.scss';

interface Props {
  name: string;
  num?: number;
}
const ChoiceItem: FC<Props> = ({ name, num }) => {
  return (
    <div className={styles.choiceIcon}>
      <Icon name={name} />
      {num && <span className={styles.count}>{num}</span>}
    </div>
  );
};

export default ChoiceItem;