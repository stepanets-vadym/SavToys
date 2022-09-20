// React

// Components & elements
import ContactBlock from './ContactBlock';
import classNames from 'classnames';

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Footer.module.scss';
import MenuBlock from './MenuBlock';
import NetworkBlock from './NetworkBlock';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.content}>
          <ContactBlock />
          <MenuBlock />
          <NetworkBlock />
        </div>
        <div className={styles.licence}>2011-2022 Всі права захищені</div>
      </div>
    </footer>
  );
};

export default Footer;
