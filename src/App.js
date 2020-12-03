import './App.css';
import { BrowserRouter } from 'react-router-dom';

import HeaderContent from './components/HeaderContent/HeaderContent';
import Projects from './components/Projects/Projects';
import Aboutme from './components/Aboutme/Aboutme';
import FooterContent from './components/FooterContent/FooterContent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderContent />
        <Aboutme />
        <Projects />
        <FooterContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
