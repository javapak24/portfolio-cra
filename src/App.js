import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PortfolioView from './PortfolioView';
import Home from './Home';
import ContactView from './ContactView';
import CaseView from './CaseView';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/portfolio" element={<PortfolioView />} />
          <Route path="/portfolio-cra" element={<Home />} />
          <Route path="/casestudy" element={<CaseView />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
