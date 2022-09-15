// React
import { FC } from 'react';
import { LimitSelectType } from 'Types/StaticInfo.types';

// Components & elements

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Select.module.scss';

interface Props {
  options: any[]
  onChange: (value:  string) => void;
  

}

const Select: FC<Props> = ({ onChange, options, }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} className={styles.select}>
      {options.map (option => 
        <option className={styles.option} value={option.value} key={option.id} >{option.name}</option>
        )}  
    </select>
  );
};

export default Select;
