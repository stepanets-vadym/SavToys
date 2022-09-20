// React
import { FC, useEffect } from 'react';

// Comopents & elements
import CustomSelect from 'elemenst/select/Select';
import { LimitSelect, sortProd, sortType } from 'staticInfo/StaticInfo';

// Redux
import { useAppDispatch } from 'hooks/redux';
import { productAPI } from 'servises/ProductServise';
import { productSortByClick } from 'store/reducers/ProductsSort';

// Styles
import styles from './SortBlock.module.scss';

interface Props {
  setLimit: (value: string) => void;
  setSortTypes: (value: string) => void;
}

const SortBlock: FC<Props> = ({ setLimit, setSortTypes, }) => {

  
  return (
    <div className={styles.sortBlock}>
      <div className={styles.limitBlock}>
        <div className={styles.sortTitle}>Відобразити</div>
        <CustomSelect
          options={LimitSelect()}
          onChange={setLimit}
          defaultVal={'5'}
        />
      </div>
      <div className={styles.limitBlock}>
        <div className={styles.sortTitle}>Сортувати:</div>
        <CustomSelect
          options={sortProd()}
          onChange={setSortTypes}
          defaultVal={'Всі'}
        />
      </div>
    </div>
  );
};

export default SortBlock;
