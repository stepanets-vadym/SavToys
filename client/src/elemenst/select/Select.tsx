// React
import { FC, useState , useEffect} from 'react';
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
  defaultVal:string;
  
}

const CustomSelect: FC<Props> = ({ onChange, options,  defaultVal}) => {
  const [openMenu, SetOpenMenu] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState<string>(defaultVal)
  const getSelectValue = async (
    e: { stopPropagation: () => void },
    value: string,
    name: string
  ) => {
    e.stopPropagation();
    SetOpenMenu(!openMenu);
    setDefaultValue(name)
    onChange(value);
    
  };

  
  return (
    <div className={styles.select} onClick={() => SetOpenMenu(!openMenu)}>
      <div className={styles.value}>
        {defaultValue}
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
              getSelectValue(e, option.value, option.name);
              
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
