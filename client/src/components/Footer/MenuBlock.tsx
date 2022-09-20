// React
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

// Components & elements

// Style
import styles from './MenuBlock.module.scss';

type LinkType = {
  id: string;
  text: string;
  href: string;
};

const linkArr1: LinkType[] = [
  {
    id: uniqid(),
    text: 'Каталог',
    href: '/shop',
  },
  {
    id: uniqid(),
    text: 'Про нас',
    href: '/about',
  },
  {
    id: uniqid(),
    text: 'Оплата та доставка',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Повернення та гарантійний ремонт',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Захист особистих данних',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Бренди',
    href: '/brands',
  },
];

const linkArr2: LinkType[] = [
  {
    id: uniqid(),
    text: 'Правила покупки',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Відгуки',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'FAQ',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Повернення та гарантійний ремонт',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Блог',
    href: '/',
  },
  {
    id: uniqid(),
    text: 'Контакти',
    href: '/',
  },
];

const MenuBlock = () => {
  return (
    <div className={styles.MenuBlock}>
      <h2 className={styles.title}>Меню сайта</h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          {linkArr1.map((link) => (
            <li className={styles.listItem} key={'li - ' + link.id}>
              <Link className={styles.link} to={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {linkArr2.map((link) => (
            <li className={styles.listItem} key={'li - ' + link.id}>
              <Link className={styles.link} to={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBlock;
