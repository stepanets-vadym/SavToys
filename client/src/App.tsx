// React
import { useEffect } from 'react';
// Components & elements
import AppRouter from 'components/appRouter/AppRouter';
import { Sprite } from './elemenst/sprite/Sprite';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Header/Menu';

// Redux
import { useAppDispatch } from 'hooks/redux';

// Style
import './styles/index.scss';
import {
  fetchProductTypes,
  getCheckedUser,
} from 'store/reducers/ActionsCreator';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductTypes());
    if (localStorage.getItem('token')) {
      dispatch(getCheckedUser());
    }
  }, []);
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
