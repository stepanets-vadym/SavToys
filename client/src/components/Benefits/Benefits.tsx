// React

// Components & elements
import classNames from 'classnames';
import Icon from '../../elemenst/icon/Icon';

// Context

// Types
import { BenefitsTypes } from 'Types/Benefits.types';

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Benefits.module.scss';

const BenefitsArr: BenefitsTypes[] = [
  {
    id: 1,
    icon: 'Diamond',
    name: 'Гарантія якості',
  },
  {
    id: 2,
    icon: 'Figures',
    name: 'Величезний ассортимент',
  },
  {
    id: 3,
    icon: 'delivery',
    name: 'Швидка доставка',
  },
  {
    id: 4,
    icon: 'Discount',
    name: 'Вигідні ціни і бонуси',
  },
];

export default function Benefits() {
  return (
    <div className={styles.Benefits}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        {BenefitsArr?.map((item) => (
          <div className={styles.benefitsItem} key={item.id}>
            <div className={styles.icon}>
              <Icon name={item.icon} />
            </div>
            <div className={styles.name}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
