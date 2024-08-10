import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortfolioView from './PortfolioView';
import Home from './Home';
import ContactView from './ContactView';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactView />} />
      <Route path='/portfolio' element={<PortfolioView />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
