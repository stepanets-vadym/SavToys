// React
import Logo from 'elemenst/Logo/Logo';
import uniqid from 'uniqid';

// Components & elements
import Icon from '../../elemenst/icon/Icon';

// ConiconName

// Style
import styles from './NetworkBlock.module.scss';

type LinkType = {
  id: string;
  iconName: string;
  href: string;
};

const linkArr: LinkType[] = [
  {
    id: uniqid(),
    iconName: 'twetter',
    href: '/',
  },
  {
    id: uniqid(),
    iconName: 'instagram',
    href: '/',
  },
  {
    id: uniqid(),
    iconName: 'Youtube',
    href: '/',
  },
  {
    id: uniqid(),
    iconName: 'facebook',
    href: '/',
  },
];

const NetworkBlock = () => {
  return (
    <div className={styles.NetworkBlock}>
      <h2 className={styles.title}>Соціальні мережі</h2>
      <ul className={styles.list}>
        {linkArr.map((link) => (
          <li className={styles.listItem} key={'li - ' + link.id}>
            <a className={styles.link} href={link.href} target={'_blank'}>
              <Icon name={link.iconName} />
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.logoBlock}>
        <Logo />
      </div>
    </div>
  );
};

export default NetworkBlock;
