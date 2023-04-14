import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import Search from './Search';
import Cards from './Cards';
import About from './About';
import Poster from './Poster';
import Formulaire from './Formulaire';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Search/>
    <Slider/>
    <About/>
    <Cards/>
    <Poster/>
    <Formulaire/>
    <Footer/>
    </div>
  );
}

export default App;
