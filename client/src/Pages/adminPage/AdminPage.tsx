// React
import classNames from 'classnames';
import CreateBrand from 'components/Admin/CreateBrand';

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
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
