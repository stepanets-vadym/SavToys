// React
import { FC, useState } from 'react';
import { LimitSelectType } from 'Types/StaticInfo.types';

// Components & elements
import Icon from 'elemenst/icon/Icon';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Select.module.scss';

interface Props {
  options: LimitSelectType[];
  onChange: (value: string) => void;
  value: string;
}

const CustomSelect: FC<Props> = ({ onChange, options, value }) => {
  const [openMenu, SetOpenMenu] = useState<boolean>(false);

  const getSelectValue = async (
    e: { stopPropagation: () => void },
    value: string
  ) => {
    e.stopPropagation();
    SetOpenMenu(!openMenu);
    onChange(value);
  };

  return (
    <div className={styles.select} onClick={() => SetOpenMenu(!openMenu)}>
      <div className={styles.value}>
        {value}
        <span className={styles.icon}>
          <Icon name={'arrow'}/>
        </span>
        </div>
      <div className={openMenu ? styles.options : styles.CloseOptions}>
        {options.map((option) => (
          <div
            className={styles.option}
            key={option.id}
            onClick={(e) => {
              getSelectValue(e, option.value);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
