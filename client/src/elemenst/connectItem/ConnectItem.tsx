import {FC} from 'react'

import Icon from "elemenst/icon/Icon";

// Style
import styles from './ConnectItem.module.scss';

interface Props {
  iconName: string
  data: string
  href?: string
}

const ConnectItem: FC<Props> = ({iconName, data, href}) => {
  return (
    <a href={href ? href: '/'} target='_blan' className={styles.connectLink}>
      <span className={styles.connectIcon}>
        <Icon name={iconName} />
      </span>
      <span className={styles.connectInfo}>{data}</span>
    </a>
  );
};
export default ConnectItem;
