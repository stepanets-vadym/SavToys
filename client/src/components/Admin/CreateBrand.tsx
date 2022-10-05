// React
import { FC, useState } from 'react';


// Redux
import { useAppDispatch } from 'hooks/redux';

// Components & Elements
import Icon from 'elemenst/icon/Icon';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './CreateBrand.module.scss';



const CreateBrand = () => {
  const [openCreateWindow, setOpenCreateWindow] = useState<boolean>(false)
  return (
    <div className={styles.CreateBrand}>
      <button className={styles.openBtn} onClick={()=> setOpenCreateWindow(true)}>
        Додати бренд
      </button>
      {
        openCreateWindow ? 
        <div className={styles.createWindow}>
          
        </div>
        : null
      }
    </div>
  );
};

export default CreateBrand;
