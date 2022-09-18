import classNames from 'classnames';
import {FC} from 'react'


// Styles 
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Pagination.module.scss';

interface Props {
  count: number | undefined;
  limit: string
  pageNum: number
  setPageNum: (value: number) => void
}

const Pagination:FC <Props> = ({count, limit, pageNum, setPageNum}) => {

  // кількість сторінок товарів
  const pageCount = Math.ceil(
    count ? count / Number(limit) : 1
  );
  const pages = [];

  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }


  return (
    <div className={styles.pagination}>
    {pages.map((page) => (
      <div
        className={
          pageNum === page
            ? classNames(styles.page, styles.selectedPage)
            : styles.page
        }
        onClick={()=> setPageNum(page)}
        key={'pageNum -> ' + page}
      >
        {page}
      </div>
    ))}
  </div>
  )
}


export default Pagination