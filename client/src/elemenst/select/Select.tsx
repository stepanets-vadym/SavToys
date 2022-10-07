// React
import { FC, useState } from 'react';

// Components & elements
import Icon from 'elemenst/icon/Icon';

// Style
import styles from './Select.module.scss';

interface Props {
  options: any[];
  onChange: (value: any) => void;
  defaultVal: string;
  takeAllValue?: boolean;
}

const CustomSelect: FC<Props> = ({ onChange, options, defaultVal, takeAllValue = false }) => {
  // відкрити меню селекту
  const [openMenu, SetOpenMenu] = useState<boolean>(false);
  // Стандартне значення 
  const [defaultValue, setDefaultValue] = useState<string>(defaultVal);
  // Отримання даннх з селекту
  const getSelectValue = async (
    e: { stopPropagation: () => void },
    value: string,
    name: string
  ) => {
    e.stopPropagation();
    SetOpenMenu(!openMenu);
    setDefaultValue(name);
    onChange(value);
  };

  return (
    <div className={styles.select} onClick={() => SetOpenMenu(!openMenu)}>
      <div className={styles.value}>
        {defaultValue}
        <span className={styles.icon}>
          <Icon name={'arrow'} />
        </span>
      </div>
      <div className={openMenu ? styles.options : styles.CloseOptions}>
        {options.map((option) => (
          <div
            className={styles.option}
            key={option.id}
            onClick={(e) => {
              getSelectValue(e, takeAllValue ? option :option.value, option.name);
              
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
