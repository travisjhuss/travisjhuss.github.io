import { useRef } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Top from '../Top/Top';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './App.css';

import Fade from 'react-reveal/Fade';


function App() {

  const titleRef = useRef();

  return (
    <div className="App">
        <Header />

        <Top />

        <Fade bottom duration={2000} opposite>
          <About id={'about'}/>
        </Fade>

        <Skills />

        <Work />

        <Contact />
    </div>
  );
}

export default App;
