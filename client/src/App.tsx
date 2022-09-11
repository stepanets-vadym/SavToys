// React

// Components & elements
import Benefits from 'components/Benefits/Benefits';
import ImagesBlock from 'components/ImagesBlock/ImagesBlock';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import { Sprite } from './elemenst/sprite/Sprite';

// Context

// Style
import './styles/index.scss';


function App() {
  return (
    <div className="App">
      <Sprite />
      <Header/>
      <Banner/>
      <ImagesBlock/>
      <Benefits/>
    </div>
  );
}

export default App;
