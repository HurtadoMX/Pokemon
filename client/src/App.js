import './App.css';

import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import CreatePokemon from './components/CreatePokemon'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/pokemon" element={<CreatePokemon />} />         

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
