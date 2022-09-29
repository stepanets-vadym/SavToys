import AdminPage from 'Pages/adminPage/AdminPage';
import Authorization from 'Pages/authorization/Authorization';
import CartPage from 'Pages/cartPage/CartPage';
import HomePage from 'Pages/homePage/HomePage';
import News from 'Pages/news/News';
import Registration from 'Pages/registration/Registration';
import Shop from 'Pages/shop/Shop';
import ToyPage from 'Pages/toyPage/ToyPage';
import UserPage from 'Pages/UserPage/UserPage';

import {
  ADMIN_ROUTE,
  AUTHORIZATION_ROUTE,
  CART_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  TOY_ROUTE,
  USER_ROUTE,
} from 'utils/consts';

// way to the page
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: <AdminPage />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Element: <Shop />,
  },
  {
    path: AUTHORIZATION_ROUTE,
    Element: <Authorization />,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: <Registration />,
  },
  {
    path: TOY_ROUTE + '/:id',
    Element: <ToyPage />,
  },
  {
    path: HOME_ROUTE,
    Element: <HomePage />,
  },
  {
    path: NEWS_ROUTE,
    Element: <News />,
  },
  {
    path: CART_ROUTE,
    Element: <CartPage />,
  },
  {
    path: USER_ROUTE,
    Element: <UserPage />,
  },
];
