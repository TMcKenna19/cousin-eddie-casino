import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import PickNumber from './Components/PickNumber';
import CoinToss from './Components/CoinToss';
import War from './Components/War';
import RPS from './Components/RPS';
import PickHand from './Components/PickHand';
import Tiktaktoe from './Components/Tiktaktoe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pickanumber" element={<PickNumber/>} />
        <Route path="/cointoss" element={<CoinToss/>} />
        <Route path="/war" element={<War/>} />
        <Route path="/rockpaperscissor" element={<RPS/>} />
        <Route path="/pickahand" element={<PickHand/>} />
        <Route path="/tiktaktoe" element={<Tiktaktoe/>} />
      </Routes>
    </div>
  );
}

export default App;
