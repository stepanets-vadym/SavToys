// React

// Components & elements
import AppRouter from 'components/appRouter/AppRouter';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Header/Menu';
import HomePage from 'Pages/homePage/HomePage';
import Header from './components/Header/Header';
import { Sprite } from './elemenst/sprite/Sprite';

// Context

// Style
import './styles/index.scss';

function App() {
  return (
    <div className='App'>
      <Sprite />
      <Header />
      <Menu/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
