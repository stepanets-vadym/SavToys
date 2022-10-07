// React
import { useEffect } from 'react';
// Components & elements
import AppRouter from 'components/appRouter/AppRouter';
import { Sprite } from './elemenst/sprite/Sprite';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Header/Menu';

// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { likesProductsArr } from 'store/reducers/LikeProducts';
import {
  fetchBrands,
  fetchProductTypes,
  getCheckedUser,
} from 'store/reducers/ActionsCreator';

// Style
import './styles/index.scss';
import { cartItemsArr } from 'store/reducers/Cart';

function App() {
  const dispatch = useAppDispatch();
  const { likesProducts } = useAppSelector((state) => state.likesProducts);
  const { cartItems } = useAppSelector((state) => state.cartItemsArr);

  useEffect(() => {
    dispatch(fetchProductTypes());
    dispatch(fetchBrands());
    if (localStorage.getItem('token')) {
      dispatch(getCheckedUser());
    }
  }, []);

  useEffect(() => {
    dispatch(likesProductsArr.actions.setlocalStorage());
  }, [likesProducts]);

  useEffect(() => {
    dispatch(cartItemsArr.actions.setCartlocalStorage());
  }, [cartItems]);

  return (
    <div className='App'>
      <Sprite />
      <Header />
      <Menu />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
