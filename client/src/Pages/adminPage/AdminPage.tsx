// React
import classNames from 'classnames';

// Components & elements
import CreateBrand from 'components/Admin/CreateBrand';
import CreateProduct from 'components/Admin/CreateProduct';
import CreateType from 'components/Admin/CreateType';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './AdminPage.module.scss';

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <h2 className={styles.title}>Панель адміністратора</h2>
        <div className={styles.createBlock}>
          <CreateBrand />
          <CreateType/>
          <CreateProduct/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
