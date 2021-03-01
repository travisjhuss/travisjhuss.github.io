import Header from '../Header/Header';
import Top from '../Top/Top';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './App.css';

// import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect } from 'react';

function App() {



  return (
    <div className="App">
      <Header />

      <Top />

      <About />

      <Skills />

      <Work />

      <Contact />
    </div>
  );
}

export default App;
