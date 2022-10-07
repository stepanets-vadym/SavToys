// React
import {FC } from 'react'

// Components & components
import Icon from 'elemenst/icon/Icon';
import { ProductDescriptions } from 'Types/ProdDescription.types';


// Styles
import styles from './ProdDescription.module.scss';


interface Props {
  infoItem: ProductDescriptions,
  remuveInfo: (value: number) => void
  changeInfo: (key: string, value: string, num:number) => void
}

const ProdDescription:FC<Props> = ({infoItem, remuveInfo, changeInfo}) => {
 

  return (
    <div className={styles.description} key={infoItem.num}>
                <div className={styles.desItem}>
                  {' '}
                  <input
                    className={styles.input}
                    value={infoItem.name}
                    onChange={(e)=> changeInfo('name', e.target.value, infoItem.num)}
                    placeholder='введіть назву характеристики'
                  />
                </div>
                <div className={styles.desItem}>
                  {' '}
                  <input
                    className={styles.input}
                    value={infoItem.description}
                    onChange={(e)=> changeInfo('description', e.target.value, infoItem.num)}
                    placeholder='опис характеристики'
                  />
                </div>
                <button
                  className={styles.remuveBtn}
                  type={'button'}
                  onClick={() => remuveInfo(infoItem.num)}
                >
                  <Icon name='cross' />
                </button>
              </div>
  );
};

export default ProdDescription;
