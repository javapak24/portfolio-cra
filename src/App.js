import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PortfolioView from './PortfolioView';
import Home from './Home';
import ContactView from './ContactView';
import CaseView from './CaseView';
import AwsCaseStudyView from './AwsCaseStudyView';
import BbbCaseStudyView from './BbbCaseStudyView';
import TwilioCaseStudyView from './TwilioCaseStudyView';

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
          <Route path="/case-study-aws" element={<AwsCaseStudyView />} />
          <Route path="/case-study-bbb" element={<BbbCaseStudyView />} />
          <Route path="/case-study-twilio" element={<TwilioCaseStudyView />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
